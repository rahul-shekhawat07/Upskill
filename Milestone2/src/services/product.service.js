import { productModel } from "../models";
import { errorHandler } from "../middlewares";
import { Op } from "sequelize";

const getProducts = async (id = null) => {
    let productsArr;
    if (id) productsArr = await productModel.findAndCountAll({ where: { productId: id } });
    else productsArr = await productModel.findAndCountAll();
    if (productsArr.count > 0) {
        return { found: true, count: productsArr.count, rows: productsArr.rows };
    } else {
        return { found: false, rows: "Rows not found" };
    }
}
const checkSlug = async (body, id = null) => {
    let productTitle, slug, options;
    productTitle = body.productName;
    slug = body.productSlug;
    if (!slug && id) {
        let products = await productModel.findByPk(id);
        slug = products.productSlug;
    } else {
        if (!slug) slug = productTitle;
        slug = slug.toLowerCase().split(" ").filter(Boolean).join("-");
        options = { where: { productSlug: slug } };
        if (id) options = { where: { [Op.and]: [{ productSlug: slug }, { productId: { [Op.ne]: id } }] } };
        let slugExists = await productModel.findOne(options);
        if (slugExists) slug = slug + "-" + Math.floor(Math.random() * 1000).toString();
    }
    body.productSlug = slug;
    return body;
};
const saveProduct = async (body, id = null) => {
    body = await checkSlug(body, id);
    if (id) {
        return await productModel.update(body, { where: { productId: id } }).then(() => {
            return "Product updated successfully.";
        }).catch(err => {
            throw new errorHandler(err.errors[0].message, 422);
        });
    } else {
        return await productModel.create(body).then(() => {
            return "Product added successfully.";
        }).catch(err => {
            throw new errorHandler(err.errors[0].message, 422);
        });
    }
}
const deleteProduct = async (id) => {
    let exists = await productModel.findByPk(id);
    if (!exists) throw new errorHandler("Invalid product Id.",404); 
    let a = await productModel.destroy({ where: { productId: id } });
    return "Product deleted successfully."
}
export default { getProducts, saveProduct, deleteProduct };