const joi = require("joi");

{
    module.exports.apiSchema = joi.object().keys({
        time: joi
            .string()
            .regex(/^((([0]?[1-9]|1[0-2])(:|\.)[0-5][0-9]((:|\.)[0-5][0-9])?( )?(AM|am|aM|Am|PM|pm|pM|Pm))|(([0]?[0-9]|1[0-9]|2[0-3])(:|\.)[0-5][0-9]((:|\.)[0-5][0-9])?))$/, 'Must contain only numbers')
            .required(),
        timezone: joi
            .string()
            .regex(/^-?[0-9]\d*(\d+)?$/, 'Must contain only numbers')
            .required(),
    });

}