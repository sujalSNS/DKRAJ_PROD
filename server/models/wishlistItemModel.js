module.exports = (sequelize, DataTypes) => {
    const WishlistItem = sequelize.define("WishlistItem", {
        wishlistItemID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        addedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    });

    WishlistItem.associate = function(models) {
        WishlistItem.belongsTo(models.Wishlist, {
            foreignKey: 'WishlistId',
            onDelete: 'CASCADE'
        });
        WishlistItem.belongsTo(models.Product, {
            foreignKey: 'ProductId',
            onDelete: 'CASCADE'
        });
    };

    return WishlistItem;
};
