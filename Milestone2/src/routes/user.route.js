import express from 'express';
import { userController } from '../controllers';
export default express
    .Router()
    .get('/',userController.getAllUsers)
    .get('/:id',userController.getUserById)
    .get('/delete/:id',userController.deleteUser)
    .post('/add',userController.createUser);