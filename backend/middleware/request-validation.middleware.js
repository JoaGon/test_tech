const Joi = require("joi");

module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        if(!req.body) res.status(400).json({})
        Joi.validate(req.body, schema, { convert: false }, (err) => {
            if(err) {
                return res.status(400).json({
                    message: err.details[0].message
                })
            } else {
                next();
            }
        });
    }
}