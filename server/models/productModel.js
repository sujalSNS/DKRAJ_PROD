
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
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // category: {
        //     type: DataTypes.JSON,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true
        //     }
        // },
        // purity: {
        //     type: DataTypes.JSON,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true
        //     }
        // },
        // size: {
        //     type: DataTypes.JSON,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true
        //     }
        // },
        // gender: {
        //     type: DataTypes.JSON,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true
        //     }
        // },
        // price: {
        //     type: DataTypes.FLOAT,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true,
        //         isFloat: true
        //     }
        // },
        // popular: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false,
        //     defaultValue: false
        // },
        // state: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false,
        //     defaultValue: true
        // },
        // madeToOrder: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false,
        //     defaultValue: false
        // },
        // stock: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true,
        //         isInt: true
        //     }
        // },
        // labor: {
        //     type: DataTypes.FLOAT,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true,
        //         isFloat: true
        //     }
        // },
        // packaging: {
        //     type: DataTypes.FLOAT,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true,
        //         isFloat: true
        //     }
        // },
        // grams: {
        //     type: DataTypes.JSON,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true
        //     }
        // }
    });

    // You can define associations here if needed
    // For example, if products belong to users:
    // Product.associate = function(models) {
    //     Product.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false,
    //         },
    //         onDelete: 'CASCADE',
    //     });
    // };

    return Product;
};
