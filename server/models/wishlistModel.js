module.exports = (sequelize, DataTypes) => {
    const Wishlist = sequelize.define("Wishlist", {
        wishlistID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        userID: {
            type: DataTypes.UUID,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    });

    Wishlist.associate = function(models) {
        Wishlist.belongsTo(models.User, {
            foreignKey: 'userID',
            onDelete: 'CASCADE'
        });
        Wishlist.hasMany(models.WishlistItem, {
            foreignKey: 'wishlistID',
            onDelete: 'CASCADE'
        });
    };

    return Wishlist;
};
