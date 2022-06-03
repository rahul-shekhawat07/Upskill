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
const create = (userData) => {
    var users = allUsers();
    if (userData.empid) {
        var userExists = getUserDataById(userData.empid);
        if (userExists) {
            return false;
        } else {
            var userArr = {
                "empid": userData.empid,
                "first_name": userData.first_name,
                "last_name": userData.last_name,
                "email": userData.email
            }
            return userModel.save(userArr);
        }
    }
    // return users.filter((users) => { return users.empid == userId })
}
module.exports = {allUsers,usersCount,getUserDataById,create};