const Router = require('express').Router;
const {body} = require('express-validator');
const router = new Router();
const userController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const courseController = require('../controllers/course-controller');



router.post('/registration',
 body('email').isEmail(),
 body('password').isLength({min: 3, max:32}),
 userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.resresh);
router.get('/users', authMiddleware, userController.getUsers);
router.post('/user/update', userController.update);
router.get('/profile', userController.profileUser)
router.post('/submit', courseController.userAnswer)

module.exports = router