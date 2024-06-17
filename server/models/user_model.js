const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, unique: true, required:true},
    password: {type: String, required:true},
    isActivated: {type: Boolean,default:false},
    role : {type: String, default: "Student"},
    loginAttempts: {type: Number, required: true, default:0},
    lockUntil: { type: Number },
    activationLink: {type: String},
    completedTask: {type:Number, default:0}
    // Courses: [{title : {type: String, ref: 'Course'}}]
})
UserSchema.virtual('isLocked').get(function() {
    return !!(this.lockUntil && this.lockUntil > Date.now());
});

module.exports = model('User', UserSchema);
