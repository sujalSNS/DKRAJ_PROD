const express = require("express");
const router = express.Router();
const {
  addToWishlist,
  getWishlist,
  getUserWithWishlist,
} = require("../controllers/wishlistController");
const { isAuthenticated } = require("../middlewares/auth");

router.route("/add-wishlist").post(isAuthenticated, addToWishlist);
router.route("/get-wishlist").get(isAuthenticated, getWishlist);
router.route("/get-wishlist-byUser").get(isAuthenticated, getUserWithWishlist)

module.exports = router;
