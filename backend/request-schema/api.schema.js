const joi = require("joi");

{
    module.exports.apiSchema = joi.object().keys({
        time: joi
            .string()
            .required(),
        timezone: joi
            .string()
            .regex(/^-?[0-9]\d*(\d+)?$/, 'Must contain only numbers')
            .required(),
    });

}