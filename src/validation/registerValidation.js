import Joi from "joi";
import validation from "./validation";

const registerSchema = Joi.object({
    first: Joi.string().min(2).max(256).required(),
    middle: Joi.string().min(2).max(256).allow(""),
    last: Joi.string().min(2).max(256).required(),
    phone: Joi.string()
        .min(9)
        .max(11)
        .pattern(/^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/)
        .required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(5)
        .required(),
    password: Joi.string()
        .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{6,}$/))
        .messages({
            "string.pattern.base": "must be uppercase,lowercase,digit and special characters",
            "string.empty": "password must be filled with 7 character that you will not forget",
        })
        .min(7)
        .max(20)
        .required(),
    url: Joi.string().min(14).allow(""),
    alt: Joi.string().min(2).max(256).allow(""),
    state: Joi.string().min(2).max(256).allow(""),
    country: Joi.string().min(2).max(256).required(),
    city: Joi.string().min(2).max(256).required(),
    street: Joi.string().min(2).max(256).required(),
    houseNumber: Joi.number().min(1).max(256).required(),
    zip: Joi.number().min(2).max(256).allow(""),
});

const validateRegister = (inputToCheck) => validation(registerSchema, inputToCheck);

export { validateRegister };
