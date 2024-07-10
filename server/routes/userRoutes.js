const express = require('express')
const { register, login, firbaseAuth, verify, getUsers } = require('../controllers/userControllers')
const { isAuthenticated } = require('../middlewares/auth')
const verifyFirebaseToken = require('../middlewares/verifyFirebaseToken');

const router = express.Router()

// Normal registration and login routes
router.post('/auth/register', register);
router.post('/auth/login', login);

// Google OAuth routes
router.post('/auth/firebase', verifyFirebaseToken, firbaseAuth);

router.route("/auth/verify").get(isAuthenticated, verify);


router.route("/users").get(getUsers);


module.exports = router