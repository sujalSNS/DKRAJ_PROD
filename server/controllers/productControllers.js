const { Product } = require('../models/index.js');
const validator = require('validator');
const xss = require('xss');
const { Op } = require('sequelize');


// Create Product | Admin route
exports.createProductAdmin = async (req, res, next) => {
  try {
    const {
      title, desc, img1, img2, img3, totalPrice, sellingPrice, category, size, weight, purity, gender, stock, availableState, madeToOrder, popular, labor, packaging, countryTax, country, active,
    } = req.body;

    // Check for required fields and provide more specific error messages
    if (!title) return res.status(400).json({ success: false, message: 'Title is required!' });
    if (!desc) return res.status(400).json({ success: false, message: 'Description is required!' });
    if (!img1) return res.status(400).json({ success: false, message: 'Image 1 is required!' });
    if (totalPrice === undefined) return res.status(400).json({ success: false, message: 'Total price is required!' });
    if (sellingPrice === undefined) return res.status(400).json({ success: false, message: 'Selling price is required!' });
    if (!category) return res.status(400).json({ success: false, message: 'Category is required!' });
    if (!size) return res.status(400).json({ success: false, message: 'Size is required!' });
    if (!weight) return res.status(400).json({ success: false, message: 'Weight is required!' });
    if (!purity) return res.status(400).json({ success: false, message: 'Purity is required!' });
    if (!gender) return res.status(400).json({ success: false, message: 'Gender is required!' });
    if (stock === undefined) return res.status(400).json({ success: false, message: 'Stock is required!' });
    if (labor === undefined) return res.status(400).json({ success: false, message: 'Labor is required!' });
    if (packaging === undefined) return res.status(400).json({ success: false, message: 'Packaging is required!' });
    if (countryTax === undefined) return res.status(400).json({ success: false, message: 'Country tax is required!' });
    if (!country) return res.status(400).json({ success: false, message: 'Country is required!' });

    // Sanitize and escape inputs
    const sanitizedTitle = xss(validator.trim(validator.escape(title)));
    const sanitizedDesc = xss(validator.trim(validator.escape(desc)));
    const sanitizedImg1 = xss(validator.trim(img1.replace(/^data:image\/[a-zA-Z]+;base64,/, '')));
    const sanitizedImg2 = img2 ? xss(validator.trim(img2.replace(/^data:image\/[a-zA-Z]+;base64,/, ''))) : null;
    const sanitizedImg3 = img3 ? xss(validator.trim(img3.replace(/^data:image\/[a-zA-Z]+;base64,/, ''))) : null;
    const sanitizedTotalPrice = validator.toFloat(totalPrice.toString());
    const sanitizedSellingPrice = validator.toFloat(sellingPrice.toString());
    const sanitizedCategory = xss(validator.trim(validator.escape(category)));
    const sanitizedSize = Array.isArray(size) ? size : JSON.parse(size); // Parse if it's a JSON string
    const sanitizedWeight = Array.isArray(weight) ? weight : JSON.parse(weight); // Parse if it's a JSON string
    const sanitizedPurity = Array.isArray(purity) ? purity : JSON.parse(purity); // Parse if it's a JSON string
    const sanitizedGender = xss(validator.trim(validator.escape(gender)));
    const sanitizedStock = validator.toInt(stock.toString());
    const sanitizedAvailableState = availableState !== undefined ? validator.toBoolean(availableState.toString()) : false;
    const sanitizedMadeToOrder = madeToOrder !== undefined ? validator.toBoolean(madeToOrder.toString()) : false;
    const sanitizedPopular = popular !== undefined ? validator.toBoolean(popular.toString()) : false;
    const sanitizedLabor = validator.toFloat(labor.toString());
    const sanitizedPackaging = validator.toFloat(packaging.toString());
    const sanitizedCountryTax = validator.toFloat(countryTax.toString());
    const sanitizedCountry = xss(validator.trim(validator.escape(country)));
    const sanitizedActive = active ? xss(validator.trim(validator.escape(active))) : 'active';

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
    if (sanitizedTotalPrice <= 0 || sanitizedSellingPrice <= 0 || sanitizedLabor <= 0 || sanitizedPackaging <= 0 || sanitizedCountryTax <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Total price, selling price, labor, packaging, and country tax must be positive numbers!',
      });
    }

    if (sanitizedSize.length === 0 || sanitizedWeight.length === 0 || sanitizedPurity.length === 0) {
      return res.status(400).json({ success: false, message: 'Size, weight, and purity must have at least one entry!' });
    }

    // Create the product
    const product = await Product.create({
      title: sanitizedTitle,
      desc: sanitizedDesc,
      img1: sanitizedImg1,
      img2: sanitizedImg2,
      img3: sanitizedImg3,
      totalPrice: sanitizedTotalPrice,
      sellingPrice: sanitizedSellingPrice,
      category: sanitizedCategory,
      size: sanitizedSize,
      purity: sanitizedPurity,
      weight: sanitizedWeight,
      gender: sanitizedGender,
      stock: sanitizedStock,
      availableState: sanitizedAvailableState,
      madeToOrder: sanitizedMadeToOrder,
      popular: sanitizedPopular,
      labor: sanitizedLabor,
      packaging: sanitizedPackaging,
      countryTax: sanitizedCountryTax,
      country: sanitizedCountry,
      active: sanitizedActive,
      UserId: req.user.userID,
    });

    // Format response data to include JSON arrays for size, weight, and purity
    const responseProduct = {
      ...product.toJSON(), // Convert Sequelize model instance to plain object
      size: Array.isArray(product.size) ? product.size : JSON.parse(product.size),
      weight: Array.isArray(product.weight) ? product.weight : JSON.parse(product.weight),
      purity: Array.isArray(product.purity) ? product.purity : JSON.parse(product.purity),
    };

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product: responseProduct
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







// Fetch Products | Admin route
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

// Delete Product | Admin route
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

// Get Product | Admin route
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

// Update Product | Admin route
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
    product.desc = sanitizedDesc
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


// Normal user routes

// Get Product
exports.getProduct = async (req, res, next) => {

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


// Get All Products with Pagination and Search

exports.getAllProducts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search = '', category, gender, price } = req.query;

    const offset = (page - 1) * limit;

    // Build filters based on query parameters
    const filters = {
      [Op.or]: [
        { title: { [Op.like]: `%${search}%` } },
        { category: { [Op.like]: `%${search}%` } },
      ],
    };

    if (price) {
      const [minPrice, maxPrice] = price.split('-').map(Number);
      filters.totalPrice = maxPrice
        ? { [Op.between]: [minPrice, maxPrice] }
        : { [Op.lte]: minPrice };
    }

    if (category) {
      filters.category = { [Op.in]: category.split(',') };
    }

    if (gender) {
      filters.gender = { [Op.in]: gender.split(',') };
    }

    const searchQuery = {
      where: filters,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: [['createdAt', 'DESC']],
    };

    // Fetch products from the database
    const { count, rows: products } = await Product.findAndCountAll(searchQuery);

    // Format product data to match the desired structure
    const formattedProducts = products.map(product => {
      const parseJSON = (value) => {
        try {
          return JSON.parse(value);
        } catch (error) {
          return value; // Return as-is if not valid JSON
        }
      };

      return {
        productID: product.productID,
        title: product.title,
        desc: product.desc,
        img1: product.img1,
        img2: product.img2,
        img3: product.img3,
        totalPrice: product.totalPrice,
        sellingPrice: product.sellingPrice,
        category: product.category,
        size: parseJSON(product.size), // Parse if needed
        purity: parseJSON(product.purity), // Parse if needed
        weight: parseJSON(product.weight), // Parse if needed
        gender: product.gender,
        stock: product.stock,
        availableState: product.availableState,
        madeToOrder: product.madeToOrder,
        popular: product.popular,
        labor: product.labor,
        packaging: product.packaging,
        countryTax: product.countryTax,
        country: product.country,
        active: product.active,
        UserId: product.UserId,
        updatedAt: product.updatedAt,
        createdAt: product.createdAt,
      };
    });

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      products: formattedProducts,
      pagination: {
        total: count,
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        totalPages: Math.ceil(count / limit),
      },
    });
  } catch (err) {
    return next(err);
  }
};