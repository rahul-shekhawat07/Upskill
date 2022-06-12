import { productModel } from "../models";
const allProducts = async () => {
    let productsArr = await productModel.findAndCountAll();
    if (productsArr.count > 0) {
        return { found: true, rows: productsArr.rows };
    } else {
        return { found: false, msg: "Rows not found" };
    }
}
const addProduct = async (body) => {
    // var productData = {
    //     productName: body.product_name,
    //     productSlug: body.product_slug,
    //     categoryIds: body.category_ids,
    //     isActive: true
    // }
    // await db.Products.create(productData).then().catch((error)=>{
    //     // throw error;
    //     console.log(error.errors);
    //     console.log(error.message);
    // });

    // console.log(await db.Products.create(productData));
}
export default { allProducts,addProduct };