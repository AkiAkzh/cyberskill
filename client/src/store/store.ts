import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";
import UserService from "../services/UserServies";
import CourseService from "../services/CourseServies";



export default class Store{
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    constructor(){
        makeAutoObservable(this);
    }

    setAuth(bool : boolean){
        this.isAuth = bool;
    }

    setUser(user : IUser){
        this.user = user;
    }
    setLoading(bool : boolean){
        this.isLoading = bool;
    }

    async login(email :  string, password : string){
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);

            this.setAuth(true);
            this.setUser(response.data.user);
            return response;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    
    async registration(email :  string, password : string){
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);

            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e);
        }
    }
    async logout(){
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {
            console.log(e);
        }
    }

    async checkAuth(){
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials : true})
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);

            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e)
        }
    }

    async profileUser(){
        try {
            const response = await UserService.profileUser(); 
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }

    async answerSumbit(code : string, Prolanguage: string){
        try {
            const response = await CourseService.submitAnswer(code,Prolanguage);
            console.log(response)
            
            
        } catch (e) {
            console.log(e)
        }
    }
}