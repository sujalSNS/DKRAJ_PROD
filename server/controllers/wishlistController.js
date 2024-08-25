const { Wishlist, WishlistItem, Product, User } = require('../models');

exports.addToWishlist = async (req, res) => {
    try {
        const { productId } = req.body;
        const userId = req.user.id; // Assuming you have user authentication and `req.user` is set

        // Find or create the user's wishlist
        let wishlist = await Wishlist.findOne({ where: { UserId: userId } });
        if (!wishlist) {
            wishlist = await Wishlist.create({ UserId: userId });
        }

        // Check if the product already exists in the wishlist
        const wishlistItem = await WishlistItem.findOne({
            where: {
                WishlistId: wishlist.wishlistID,
                ProductId: productId,
            },
        });

        if (wishlistItem) {
            return res.status(400).json({ message: 'Product already in wishlist' });
        }

        // Add the product to the wishlist
        await WishlistItem.create({
            WishlistId: wishlist.wishlistID,
            ProductId: productId,
        });

        return res.status(200).json({ message: 'Product added to wishlist' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

exports.getWishlist = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming you have user authentication and `req.user` is set

        // Find the user's wishlist
        const wishlist = await Wishlist.findOne({
            where: { UserId: userId },
            include: [
                {
                    model: WishlistItem,
                    include: [
                        {
                            model: Product,
                            attributes: ['productID', 'title', 'desc', 'img1', 'sellingPrice'],
                        },
                    ],
                },
            ],
        });

        if (!wishlist || wishlist.WishlistItems.length === 0) {
            return res.status(404).json({ message: 'Wishlist is empty' });
        }

        return res.status(200).json(wishlist.WishlistItems);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

exports.getUserWithWishlist = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming you have user authentication and `req.user` is set

        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Wishlist,
                    include: [
                        {
                            model: WishlistItem,
                            include: [
                                {
                                    model: Product,
                                    attributes: ['productID', 'title', 'desc', 'img1', 'sellingPrice'],
                                },
                            ],
                        },
                    ],
                },
            ],
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};