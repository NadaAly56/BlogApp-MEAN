import Joi from "joi";

export const addBlogSchema = Joi.object({
    title: Joi.string().min(5),
    description: Joi.string().min(20),
    quote: Joi.string().min(20),
    type: Joi.string().required(),
    // createdBy: Joi.string().hex().length(24)
})

