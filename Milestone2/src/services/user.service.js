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
        console.log(userExists.length);
        if (userExists.length > 0) {
            throw { message : "data already exists." };
        } else {
            let userArr = {
                "empid": userData.empid,
                "first_name": userData.first_name,
                "last_name": userData.last_name,
                "email": userData.email
            }
            users.push(userArr);
            return userModel.save(users);
        }
    }
}
const deleteUser = (id) => {
    let users = allUsers();
    let userExists = getUserDataById(id);
    if (userExists.length > 0) {
        let usersArr = users.filter((users) => { return users.empid != id });
        userModel.save(usersArr);
    } else {
        throw { message : "data not found." };
    }
}
module.exports = {allUsers,usersCount,getUserDataById,create,deleteUser};