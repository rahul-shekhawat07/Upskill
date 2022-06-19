import Products from './product.model';
import ProductsCategory from './productCategory.model';

ProductsCategory.hasMany(Products, {
    foreignKey: "categoryId",
    as: "productDetails"
});
Products.belongsTo(ProductsCategory, {
    foreignKey: "categoryId",
    as: 'categoryDetails'
});
export {default as productModel} from './product.model';
export {default as productCategoryModel} from './productCategory.model';