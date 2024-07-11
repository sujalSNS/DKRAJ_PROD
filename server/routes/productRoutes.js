const express = require('express')
const { createProduct } = require('../controllers/productControllers')
const { isAuthenticated } = require('../middlewares/auth')

const router = express.Router()

router.post('/product/create', isAuthenticated, createProduct);



module.exports = router