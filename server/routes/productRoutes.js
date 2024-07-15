const express = require('express')
const { createProductAdmin, getProductsAdmin, deleteProductAdmin, getProductAdmin, updateProductAdmin } = require('../controllers/productControllers')
const { isAuthenticated, isAdminUser } = require('../middlewares/auth')

const router = express.Router()

router.post('/admin/product/create', isAuthenticated, isAdminUser, createProductAdmin);
router.get('/admin/products',isAuthenticated, isAdminUser, getProductsAdmin);
router.delete('/admin/product/delete/:productID',isAuthenticated, isAdminUser, deleteProductAdmin);
router.get('/admin/product/:productID',isAuthenticated, isAdminUser, getProductAdmin);
router.put('/admin/product/update/:productID',isAuthenticated, isAdminUser, updateProductAdmin);

module.exports = router


