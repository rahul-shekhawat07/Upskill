import { productService } from "../services";

const getProducts = async (req, resp, next) => {
    try {
        resp.status(200).send({
            success: true,
            data: await productService.getProducts(req.params.id),
        });
    } catch (error) {
        next(error);
    }
};
const saveProducts = async (req, resp, next) => {
    try {
        resp.status(200).send({
            success: true,
            data: await productService.saveProduct(req.body, req.params.id),
        });
    } catch (error) {
        next(error);
    }
};
const deleteProduct = async (req, resp, next) => {
    try {
        resp.status(200).send({
            success: true,
            data: await productService.deleteProduct(req.params.id),
        });
    } catch (error) {
        next(error);
    }
};
export default { getProducts, saveProducts, deleteProduct };
