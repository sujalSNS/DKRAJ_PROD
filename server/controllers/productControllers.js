const { Product } = require('../models/index.js');
const validator = require('validator');
const xss = require('xss');


// Create Product 
exports.createProductAdmin = async (req, res, next) => {
  try {
    const {
      title, desc, img1, img2, img3, price, category, gender, stock, availableState, madeToOrder, popular, labor, packaging,
    } = req.body;

    // Sanitize and escape inputs
    const sanitizedTitle = xss(validator.trim(validator.escape(title)));
    const sanitizedDesc = xss(validator.trim(validator.escape(desc)));
    const sanitizedImg1 = xss(validator.trim(img1.replace(/^data:image\/[a-zA-Z]+;base64,/, '')));
    const sanitizedImg2 = img2 ? xss(validator.trim(img2.replace(/^data:image\/[a-zA-Z]+;base64,/, ''))) : null;
    const sanitizedImg3 = img3 ? xss(validator.trim(img3.replace(/^data:image\/[a-zA-Z]+;base64,/, ''))) : null;
    const sanitizedPrice = validator.toFloat(price.toString());
    const sanitizedCategory = xss(validator.trim(validator.escape(category)));
    const sanitizedGender = xss(validator.trim(validator.escape(gender)));
    const sanitizedStock = validator.toInt(stock.toString());
    const sanitizedAvailableState = validator.toBoolean(availableState.toString());
    const sanitizedMadeToOrder = validator.toBoolean(madeToOrder.toString());
    const sanitizedPopular = validator.toBoolean(popular.toString()); 
    const sanitizedLabor = validator.toFloat(labor.toString());
    const sanitizedPackaging = validator.toFloat(packaging.toString());

    // Validate required fields
    if (!sanitizedTitle || !sanitizedDesc || !sanitizedImg1 || !sanitizedPrice || !sanitizedCategory || !sanitizedGender || sanitizedStock === undefined || !sanitizedLabor || !sanitizedPackaging) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields!',
      });
    }

    // Validate base64 images
    const isValidBase64Img1 = validator.isBase64(sanitizedImg1);
    const isValidBase64Img2 = !sanitizedImg2 || validator.isBase64(sanitizedImg2);
    const isValidBase64Img3 = !sanitizedImg3 || validator.isBase64(sanitizedImg3);
    if (!isValidBase64Img1 || !isValidBase64Img2 || !isValidBase64Img3) {
      return res.status(400).json({
        success: false,
        message: 'Invalid base64 image data!',
      });
    }

    // Validate category
    const allowedCategories = ['rings', 'earrings', 'bracelets', 'bangles', 'mangalsutras', 'nosePins', 'headJewelleries', 'pendantSets', 'weddingSets', 'pendants', 'anklets', 'toeRings', 'homeDecors'];
    if (!allowedCategories.includes(sanitizedCategory)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid category!',
      });
    }

    // Validate gender
    const allowedGenders = ['men', 'women', 'kids'];
    if (!allowedGenders.includes(sanitizedGender)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid gender!',
      });
    }

    // Validate positive numbers
    if (sanitizedPrice <= 0 || sanitizedLabor <= 0 || sanitizedPackaging <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Price, labor, and packaging must be positive numbers!',
      });
    }

    // Create the product
    const product = await Product.create({
      title: sanitizedTitle,
      desc: sanitizedDesc,
      img1: sanitizedImg1,
      img2: sanitizedImg2,
      img3: sanitizedImg3,
      price: sanitizedPrice,
      category: sanitizedCategory,
      gender: sanitizedGender,
      stock: sanitizedStock,
      availableState: sanitizedAvailableState,
      madeToOrder: sanitizedMadeToOrder,
      popular: sanitizedPopular,
      labor: sanitizedLabor,
      packaging: sanitizedPackaging,
      UserId: req.user.userID,
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product
    });
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).json({
        success: false,
        message: err.errors.map(e => e.message).join(', '),
      });
    }
    return next(err);
  }
};




// Fetch Products 
exports.getProductsAdmin = async (req, res, next) => {

  try {
    const products = await Product.findAll();

    if (!products) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    const sortedProducts = products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.status(200).json({
      success: true,
      products: sortedProducts
    });
  } catch (err) {
    return next(err);
  }
};

// Delete Product 
exports.deleteProductAdmin = async (req, res, next) => {

  try {
    const { productID } = req.params

    if (!productID) {
      return res.status(404).json({
        success: false,
        message: 'Invalid Product ID!'
      });
    }

    const product = await Product.findByPk(productID)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found!'
      });
    }

    await product.destroy();

    res.status(200).json({
      success: true,
      message: "Product Deleted Successfully!",
      product
    });
  } catch (err) {
    return next(err);
  }
};

// Get Product 
exports.getProductAdmin = async (req, res, next) => {

  try {
    const { productID } = req.params

    if (!productID) {
      return res.status(404).json({
        success: false,
        message: 'Invalid Product ID!'
      });
    }

    const product = await Product.findByPk(productID)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found!'
      });
    }

    res.status(200).json({
      success: true,
      message: "Product fetched Successfully!",
      product
    });
  } catch (err) {
    return next(err);
  }
};

// Update Product 
exports.updateProductAdmin = async (req, res, next) => {
  try {
    const { productID } = req.params;

    if (!productID) {
      return res.status(404).json({
        success: false,
        message: 'Invalid Product ID!'
      });
    }

    const product = await Product.findByPk(productID);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found!'
      });
    }

    
    const {
      title, desc, img1, img2, img3, price, category, gender, stock, 
      // availableState, madeToOrder, popular, 
      labor, packaging,
    } = req.body;

    // Sanitize and escape inputs
    const sanitizedTitle = xss(validator.trim(validator.escape(title)));
    const sanitizedDesc = xss(validator.trim(validator.escape(desc)));
    const sanitizedImg1 = xss(validator.trim(img1.replace(/^data:image\/[a-zA-Z]+;base64,/, '')));
    const sanitizedImg2 = img2 ? xss(validator.trim(img2.replace(/^data:image\/[a-zA-Z]+;base64,/, ''))) : null;
    const sanitizedImg3 = img3 ? xss(validator.trim(img3.replace(/^data:image\/[a-zA-Z]+;base64,/, ''))) : null;
    const sanitizedPrice = validator.toFloat(price.toString());
    const sanitizedCategory = xss(validator.trim(validator.escape(category)));
    const sanitizedGender = xss(validator.trim(validator.escape(gender)));
    const sanitizedStock = validator.toInt(stock.toString());
    // const sanitizedAvailableState = validator.toBoolean(availableState.toString());
    // const sanitizedMadeToOrder = validator.toBoolean(madeToOrder.toString());
    // const sanitizedPopular = validator.toBoolean(popular.toString()); 
    const sanitizedLabor = validator.toFloat(labor.toString());
    const sanitizedPackaging = validator.toFloat(packaging.toString());

    // Validate required fields
    if (!sanitizedTitle || !sanitizedDesc || !sanitizedImg1 || !sanitizedPrice || !sanitizedCategory || !sanitizedGender || sanitizedStock === undefined || !sanitizedLabor || !sanitizedPackaging) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields!',
      });
    }

    // Validate base64 images
    const isValidBase64Img1 = validator.isBase64(sanitizedImg1);
    const isValidBase64Img2 = !sanitizedImg2 || validator.isBase64(sanitizedImg2);
    const isValidBase64Img3 = !sanitizedImg3 || validator.isBase64(sanitizedImg3);
    if (!isValidBase64Img1 || !isValidBase64Img2 || !isValidBase64Img3) {
      return res.status(400).json({
        success: false,
        message: 'Invalid base64 image data!',
      });
    }

    // Validate category
    const allowedCategories = ['rings', 'earrings', 'bracelets', 'bangles', 'mangalsutras', 'nosePins', 'headJewelleries', 'pendantSets', 'weddingSets', 'pendants', 'anklets', 'toeRings', 'homeDecors'];
    if (!allowedCategories.includes(sanitizedCategory)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid category!',
      });
    }

    // Validate gender
    const allowedGenders = ['men', 'women', 'kids'];
    if (!allowedGenders.includes(sanitizedGender)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid gender!',
      });
    }

    // Validate positive numbers
    if (sanitizedPrice <= 0 || sanitizedLabor <= 0 || sanitizedPackaging <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Price, labor, and packaging must be positive numbers!',
      });
    }

    // Update the product
    product.title = sanitizedTitle
    product.desc =  sanitizedDesc
    product.img1 = sanitizedImg1
    product.img2 = sanitizedImg2
    product.img3 = sanitizedImg3
    product.price = sanitizedPrice
    product.category = sanitizedCategory
    product.gender = sanitizedGender
    product.stock = sanitizedStock
    product.labor = sanitizedLabor
    product.packaging = sanitizedPackaging

     

    // Save the updated product
    await product.save();

    res.status(200).json({
      success: true,
      message: "Product Updated Successfully!",
      product
    });
  } catch (err) {
    return next(err);
  }
};