const express = require('express');
const router = express.Router();
const { validateBody } = require('../middleware/request-validation.middleware');
const { apiSchema } = require('../request-schema/api.schema')
const apiController = require('../controller/api')

router.post('/',
    validateBody(apiSchema),
    apiController.getUTC
);


module.exports = router;