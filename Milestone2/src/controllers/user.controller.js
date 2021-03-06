const userService = require('../services/user.service');
const getAllUsers = (req,resp) => {
    try {
        resp.status(200).send({
            success:true,
            data: userService.allUsers(),
            totalCount: userService.usersCount()
        });
    } catch (error) {
        resp.status(400).send({
            success:false,
            message:error.message
        });
    }
};
const getUserById = (req,resp) => {
    try {
        resp.status(200).send({
            success:true,
            data: userService.getUserDataById(req.params.id)
        });
    } catch (error) {
        resp.status(400).send({
            success:false,
            message:error.message
        });
    }
};
module.exports = {getAllUsers,getUserById};
