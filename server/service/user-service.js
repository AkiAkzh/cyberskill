const UserModel = require('../models/user_model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service')
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');
const token_model = require('../models/token_model');


const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 10* 60 * 1000; // 10мин
 


class UserService {
    async registration(email, password){
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const user = await UserModel.create({email, password: hashPassword, activationLink })
        // await mailService.sendActivationLink(email,`${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user); // id, email, isActivated
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        
        return{ ...tokens, user:userDto }

        
    }
    async activate(activationLink){
        const user = await UserModel.findOne({activationLink})
        if (!user){
            throw ApiError.BadRequest('Некоректная ссылка активации')
        }
        user.isActivated = true;
        await user.save();
    }
    async login(email, password){
        const user = await UserModel.findOne({email})
        if( !user ){
            throw ApiError.BadRequest('Пользователь с таким email не найден')
        }
        
        if ( user.isLocked) {
            throw ApiError.BadRequest('Account is locked due to too many failed login attempts' );
        }

        const isPassEquals = await bcrypt.compare(password, user.password);
        if( !isPassEquals ){
            user.loginAttempts +=1;
            if( user.loginAttempts >= MAX_LOGIN_ATTEMPTS ){
                 user.lockUntil = Date.now() + LOCK_TIME;
            }
            await user.save();
            
            throw ApiError.BadRequest('Неверный пароль')
        }
        if(!user.isLocked){
             user.loginAttempts = 0;
            user.lockUntil = undefined; 
            await user.save();

            const userDto = new UserDto(user);
            const tokens = tokenService.generateTokens({...userDto});
            await tokenService.saveToken(userDto.id, tokens.refreshToken);
            
            return{ ...tokens, user:userDto }
        }else {
            return res.status(403).json({ message: 'Account is locked due to too many failed login attempts' });
        }
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken);
        return token;

    }
    async refresh(refreshToken){
        if (! refreshToken){
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if ( !userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        
        return{ ...tokens, user:userDto }
    }

    async getAllUsers(){
        const users = await UserModel.find();
        return users;
    }

    async updateUser(email, refreshToken, userPUT){
        const user = await UserModel.findOne({email});
        
    }

    async getProfile(userToken){
        const userData= await tokenService.findToken(userToken);
        const user = await UserModel.findById(userData);
        if( !user ){
            throw ApiError.BadRequest();
        }
        return {user};
    }
}

module.exports = new UserService();