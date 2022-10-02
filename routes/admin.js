const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../utils/path')
const {getAddProductPage,postAddProduct}= require('../Controllers/admin/ProductController')

router.get('/',getAddProductPage)
router.post('/add',postAddProduct)


module.exports= router;