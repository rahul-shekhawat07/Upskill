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
// import Sequelize from "sequelize";
import db from '../config/dbConnection';
import Products from './product.model';
const ProductsCategory = db.sequelize.define('product_category', {
    categoryId: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    categoryName: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    categoryDesc: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    categorySlug: {
        type: db.Sequelize.STRING,
        unique: true
    },
    isActive: {
        type: db.Sequelize.BOOLEAN,
        defaultValue: true
    }
});
ProductsCategory.sync();
export default ProductsCategory;