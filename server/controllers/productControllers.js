const { Product } = require('../models/index.js');


// Create Product 
exports.createProduct = async (req, res, next) => {
  try {
    const { title, desc } = req.body;


    if (!title || !desc) {
      return res.status(400).json({
        success: false,
        message: 'Invalid data!',
      });
    }


    const product = await Product.create({ 
      title, 
      desc,
      UserId: req.user.userID
    });

   
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product
    });
  } catch (err) {
    return next(err);
  }
};

