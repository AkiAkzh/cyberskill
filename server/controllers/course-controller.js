const { NodeVM } = require("vm2");
const ApiError = require("../exceptions/api-error");
const courseService = require("../service/course-service");


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
}

module.exports = new CourseController();