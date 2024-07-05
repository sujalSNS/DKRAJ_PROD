const express = require('express')
const { register, login, verify } = require('../controllers/userControllers')
const { isAuthenticated } = require('../middlewares/auth')
const router = express.Router()

 
router.route("/auth/register").post(register);
router.route("/auth/login").post(login);
router.route("/auth/verify").get(isAuthenticated, verify);




module.exports = router