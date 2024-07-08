const express = require('express')
const { register, login, googleAuth, facebookAuth, verify, getUsers } = require('../controllers/userControllers')
const { isAuthenticated } = require('../middlewares/auth')
const verifyFirebaseToken = require('../middlewares/verifyFirebaseToken');

const router = express.Router()

// Normal registration and login routes
router.post('/auth/register', register);
router.post('/auth/login', login);

// Google OAuth routes
router.post('/auth/google', verifyFirebaseToken, googleAuth);

// Facebook OAuth routes
router.post('/auth/facebook', verifyFirebaseToken, facebookAuth);

router.route("/auth/verify").get(isAuthenticated, verify);


router.route("/users").get(getUsers);


module.exports = router