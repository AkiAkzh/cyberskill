const { NodeVM } = require("vm2");
const ApiError = require("../exceptions/api-error");
const courseService = require("../service/course-service");
const Course = require("../models/courseDB/course_model");
const { ServerApiVersion } = require("mongodb");


class CourseController{
    async userAnswer(req, res, next){
        try {
            const { code, Prolanguage, correctAnswers } = req.body;

            if( !code ){
                return next(ApiError.BadRequest("Кода нет"));
            }
            
            try {
                const result = await courseService.executeCode(code, Prolanguage);
                // res.send({ result });
                console.log(result)
                const searchTerm = correctAnswers;
                const words = result.split(' ');
                const serverAnwser = words.some(word => word.includes(searchTerm));

                if(serverAnwser){
                    console.log(serverAnwser);
                    return res.json({serverAnwser});
                }
            } catch (error) {
                next({ error: error.toString() });
            }


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