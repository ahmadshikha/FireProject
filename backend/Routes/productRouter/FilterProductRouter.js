const express = require('express');
const router = express.Router();
const filter= require('../../Controlller/product/ProductFilterController'); // Adjust the path accordingly

router.get('/equipment', filter.getEquipment);
router.get('/shoes', filter.getShoes);
router.get('/uniforms', filter.getUniforms);

module.exports = router;