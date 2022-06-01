const userModel = require('../models/user.model');
const allUsers = () => {
    return JSON.parse(userModel.getUsers());
}
const usersCount = () => {
    return allUsers().length;
}
const getUserDataById = (userId) => {
    var users = allUsers();
    return users.filter((users) => { return users.empid == userId })
}
module.exports = {allUsers,usersCount,getUserDataById};