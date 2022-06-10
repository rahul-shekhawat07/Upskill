import { productModel } from "../models";
const allProducts = async () => {
    return JSON.parse(JSON.stringify(await productModel.getProducts()));
}
export default {allProducts};