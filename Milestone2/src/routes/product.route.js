import express from 'express';
import { productController } from '../controllers';
export default express
    .Router()
    .get('/',productController.getAllproducts);