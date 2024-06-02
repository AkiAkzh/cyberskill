const {Schema, model} = require('mongoose');

const { v4: uuidv4 } = require('uuid');

const CourseSchema = new Schema({
    courseId: {type:String, default: uuidv4, unique:true ,required: true},
    title: { type: String, unique: true,required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    sections: 
    [
        {
            
            title: { type: String, required: true },
            theoreticalpart:
            [
                {
                    theoreticaldescription: { type: String, required:true},
                }
            ],
            tasks:
            [
                {
                    taskdescription: { type: String, required: true },
                    hint: {type:String},
                    progress: { type: String, enum: ['not started', 'in-progress', 'completed'], required: true, default: 'not started' }
                }
            ]
        }
    ]
});


module.exports = model('Course', CourseSchema);
