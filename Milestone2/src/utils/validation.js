import joi from "joi";
export default {
    products: joi.object({
        productName: joi.required(),
        categoryId: joi.required(),
        productSlug: joi.allow(),
        isActive: joi.required()
    })
};
