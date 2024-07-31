module.exports = (sequelize, DataTypes) => {
    const Wishlist = sequelize.define("Wishlist", {
        wishlistID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        }
    });

    Wishlist.associate = function(models) {
        Wishlist.belongsTo(models.User, {
            foreignKey: 'UserId',
            onDelete: 'CASCADE'
        });
        Wishlist.hasMany(models.WishlistItem, {
            foreignKey: 'WishlistId',
            onDelete: 'CASCADE'
        });
    };

    return Wishlist;
};
