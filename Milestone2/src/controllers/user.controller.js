import { userService } from "../services";
const getAllUsers = async (req,resp) => {
console.log(userService);
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
const createUser = (req,resp) => {
    try {
        resp.status(200).send({
            success:true,
            data: userService.create(req.body)
        });
    } catch (error) {
        resp.status(400).send({
            success:false,
            message:error.message
        });
    }
};
const deleteUser = (req,resp) => {
    try {
        resp.status(200).send({
            success:true,
            data: userService.deleteUser(req.params.id)
        });
    } catch (error) {
        resp.status(400).send({
            success:false,
            message:error.message
        });
    }
};
export default {getAllUsers,getUserById,createUser,deleteUser};
