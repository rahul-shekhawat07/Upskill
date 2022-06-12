import { productService } from "../services";
const getAllproducts = async (req,resp) => {
    try {
        resp.status(200).send({
            success:true,
            data: await productService.allProducts(),
        });
    } catch (error) {
        resp.status(400).send({
            success:false,
            message:error.message
        });
    }
};
const addproduct = async (req,resp) => {
    try {
        resp.status(200).send({
            success:true,
            data: await productService.addProduct(req.body),
        });
    } catch (error) {
        resp.status(400).send({
            success:false,
            message:error.message
        });
    }
};
export default {getAllproducts,addproduct};
