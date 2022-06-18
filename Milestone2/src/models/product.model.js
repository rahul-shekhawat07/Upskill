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
import Sequelize  from "sequelize";
import sequelize from '../config/dbConnection';

const Products = sequelize.define('products',{
            productId: { 
                type: Sequelize.INTEGER, 
                autoIncrement: true, 
                allowNull: false, 
                unique: true, 
                primaryKey: true 
            },
            productName: { 
                type: Sequelize.STRING, 
                allowNull: false 
            },
            productSlug: { 
                type: Sequelize.STRING, 
                unique: true 
            },
            categoryId: { 
                type: Sequelize.INTEGER, 
                allowNull: false 
            },
            isActive: { 
                type: Sequelize.BOOLEAN, 
                defaultValue: true 
            }
});
sequelize.sync();
export default Products;