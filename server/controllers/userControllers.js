const { User } = require('../models');

const bcrypt = require('bcrypt');
const { createToken } = require('../middlewares/auth.js');


// Register User 
exports.register = async (req, res, next) => {
  try {
    const { firstName, lastName, username, email, dob, password, confirmPassword} = req.body;

    // Validate request data
    if (!firstName || !lastName || !username || !email || !dob || !password) {
      return res.status(400).json({
        success: false,
        message: 'Invalid data!',
      });
    }

    // Check if password is at least 6 characters long
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Password does not match!',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long!',
      });
    }

    

    // Check if username already exists
    const existingUsername = await User.findOne({ where: { username } });
    if (existingUsername) {
      return res.status(400).json({
        success: false,
        message: 'Username already exists',
      });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists',
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      dob,
      password: hashedPassword,
    });

    // Generate a token
    const token = createToken(user.id, user.email);

    // Return response with user data and token
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        dob: user.dob,
      },
      token,
    });
  } catch (err) {
    return next(err);
  }
};

// Login User 
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate request data
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Invalid data',
      });
    }

    // Check if password is at least 6 characters long
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long',
      });
    }

    // Check if username already exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'User does not exist',
      });
    }

    if (user.isFirebaseAuth) {
      return res.status(400).json({
        success: false,
        message: 'Wrong credentials',
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Wrong credentials',
      });
    }

    // Generate a token
    const token = createToken(user.id, user.email);

    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      token,
    });
  } catch (err) {
    return next(err);
  }
};

// Google and Facebook Auth through firebase
exports.firbaseAuth = async (req, res, next) => {
  try {
    const { email, name } = req.user;

    let user = await User.findOne({ where: { email } });
    if (!user) {
      user = await User.create({
        isFirebaseAuth: true,
        email,
        firstName: name.split(' ')[0],
        lastName: name.split(' ')[1]
      });
    }

    const token = createToken(user.id, user.email);

    res.status(200).json({
      success: true,
      message: 'User authenticated successfully',
      token,
    });
  } catch (err) {
    return next(err);
  }
};




// Auth verify
exports.verify = async (req, res, next) => {
  try {
    const user = req.user

    if (user) {
      return res.status(200).json({
        success: true,
        isLogin: true
      })
    }
    if (!user) {
      return res.status(200).json({
        success: true,
        isLogin: false
      })
    }

  } catch (err) {
    return next(err);
  }
}




exports.getUsers = async (req, res, next) => {
  try {

    // Check if username already exists
    const users = await User.findAll();

    res.status(200).json({
      success: true,
      users
    });

  } catch (err) {
    return next(err);
  }
};
