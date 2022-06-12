'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
	class User extends Model {}
	User.init(
		{
			productId: {type:DataTypes.INTEGER,autoIncrement:true,allowNull:false,unique:true,primaryKey:true},
			productName: {type:DataTypes.STRING,allowNull:false},
			productSlug: { type: DataTypes.STRING, unique: true },
			categoryIds: { type: DataTypes.STRING, allowNull:true },
			isActive: { type: DataTypes.BOOLEAN, defaultValue: true }
		},
		{
			sequelize,
			modelName: 'User',
            timestamps: true
		},
	);
	return User;
};