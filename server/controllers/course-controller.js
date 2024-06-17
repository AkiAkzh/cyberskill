const { NodeVM } = require("vm2");
const ApiError = require("../exceptions/api-error");
const courseService = require("../service/course-service");
const Course = require("../models/courseDB/course_model");


class CourseController{
    async userAnswer(req, res, next){
        try {
            const { code, Prolanguage } = req.body;

            if( !code ){
                return next(ApiError.BadRequest("Кода нет", errors.array()));
            }
            
            try {
                const result = await courseService.executeCode(code, Prolanguage);
                res.send({ result });
                console.log(result)
            } catch (error) {
                next({ error: error.toString() });
            }
            console.log(code);


        } catch (e) {
            next(e)            
        }
    }

    async getCourse(req, res, next){
        try {
            const courseTitle = req.params.title;
            const courseInfo = await courseService.getInfo(courseTitle);
            return res.json(courseInfo);
        } catch (e) {
            next(e)
        }
    }

    async createCourse(req, res, next){
        try {
                const { title, difficulty, author, category, description, sections } = req.body;
                const newCourse = new Course({
                    title,
                    difficulty,
                    author,
                    category,
                    description,
                    sections // Предполагается, что секции уже в правильном формате
                  });
                  await newCourse.save();
                return res.json(newCourse);

        } catch (e) {
            next(e)
        }
    }

    async getCourses(req, res, next){
        try {
            const courseslist = await courseService.getAllCourses(); 
            return res.json(courseslist);
        } catch (e) {
            next(e)
        }
    }
    async getInfo(req, res, next){
        try {
            return res.redirect(process.env.CLIENT_URL + "/course/info");
        } catch (e) {
            next(e)
        }
    }

    
}

module.exports = new CourseController();