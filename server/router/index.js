const Router = require('express').Router;
const {body} = require('express-validator');
const router = new Router();
const userController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const courseController = require('../controllers/course-controller');
const courseService = require('../service/course-service');



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
router.get('/profile', authMiddleware, userController.profileUser);


router.post('/updatedprogess',userController.updatedprogess);
router.post('/submit', authMiddleware ,courseController.userAnswer);
router.get('/info', courseController.getInfo);
router.get('/courses', courseController.getCourses);
router.post('/course/create', courseController.createCourse)
router.get('/course/:title',  courseController.getCourse)

module.exports = router