module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        productID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        img1: {
            type: DataTypes.TEXT('long'), 
            allowNull: false
        },
        img2: {
            type: DataTypes.TEXT('long'), 
            allowNull: true
        },
        img3: {
            type: DataTypes.TEXT('long'), 
            allowNull: true
        },
        totalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
                isFloat: true
            }
        },
        sellingPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
                isFloat: true
            }
        },
        category: {
            type: DataTypes.ENUM,
            values: ['rings', 'earrings', 'bracelets', 'bangles', 'mangalsutras', 'nosePins', 'headJewelleries', 'pendantSets', 'weddingSets', 'pendants', 'anklets', 'toeRings', 'homeDecors'],
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        gender: {
            type: DataTypes.ENUM,
            values: ['men', 'women', 'kids'],
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
                isInt: true
            }
        },
        availableState: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        madeToOrder: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        popular: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        labor: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
                isFloat: true
            }
        },
        packaging: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
                isFloat: true
            }
        },
        // purity: {
        //     type: DataTypes.ARRAY(DataTypes.STRING),
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true
        //     }
        // },
        // size: {
        //     type: DataTypes.ARRAY(DataTypes.STRING),
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true
        //     }
        // },
        // grams: {
        //     type: DataTypes.ARRAY(DataTypes.FLOAT),
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true,
        //         isFloat: true
        //     }
        // },
    });

    Product.associate = function (models) {
        Product.belongsTo(models.User, {
            foreignKey: 'UserId', // Specify the exact foreign key name
            onDelete: 'CASCADE',
        });
    };

    return Product;
};
