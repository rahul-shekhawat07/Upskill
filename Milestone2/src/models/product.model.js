// 'use strict';
// import { Model } from 'sequelize';
// export default (sequelize, DataTypes) => {
//     class Products extends Model { }
//     Products.init(
//         {
//             productId: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, unique: true, primaryKey: true },
//             productName: { type: DataTypes.STRING, allowNull: false },
//             productSlug: { type: DataTypes.STRING, unique: true },
//             categoryIds: { type: DataTypes.STRING, allowNull: true },
//             isActive: { type: DataTypes.BOOLEAN, defaultValue: true }
//         },
//         {
//             sequelize,
//             modelName: 'Products',
//             timestamps: true
//         },
//     );
//     return Products;
// };
// import Sequelize  from "sequelize";
import db from '../config/dbConnection';
import ProductsCategory from './productCategory.model';

const Products = db.sequelize.define('products', {
    productId: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    productName: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    productDesc: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    productSlug: {
        type: db.Sequelize.STRING,
        unique: true
    },
    categoryId: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    isActive: {
        type: db.Sequelize.BOOLEAN,
        defaultValue: true
    }
});
Products.sync();
export default Products;