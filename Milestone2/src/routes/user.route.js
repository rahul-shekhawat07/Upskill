const express = require('express');
const userController = require('../controllers');
module.exports = express
    .Router()
    .get('/',userController.getAllUsers)
    .get('/:id',userController.getUserById)
    .post('/add',userController.createUser);