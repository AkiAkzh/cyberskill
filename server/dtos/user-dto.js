module.exports = class UserDto{
    email;
    id;
    isActivated;
    course;
    constructor(model) {
        this.email = model.email;
        this.id = model.id;
        this.isActivated = model.isActivated;
        this.course = model.course;
    }
}