import { validation } from "../utils";
export default {
    addProductValidation : async (req,res,next) => {
        const productData = validation.products.validate(req.body);
        if(productData.error){
            res.status(422).json({
                error: true,
                message: productData.error.details[0].message
            });
        } else {
            next();
        }
    }
};