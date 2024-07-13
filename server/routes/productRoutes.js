const express = require('express')
const { createProduct, getProducts } = require('../controllers/productControllers')
const { isAuthenticated } = require('../middlewares/auth')

const router = express.Router()

router.post('/product/create', isAuthenticated, createProduct);
router.get('/products', getProducts);



module.exports = router


