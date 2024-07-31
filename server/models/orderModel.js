module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
        orderID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pinCode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phoneNo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paymentID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paymentStatus: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paidAt: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true,
            },
        },
        itemsPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        taxPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        shippingPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        totalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        orderStatus: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Processing"
        },
        deliveredAt: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            validate: {
                isDate: true,
            },
        }
    });

    Order.associate = models => {
        Order.belongsTo(models.User, {
            foreignKey: 'UserId', 
            allowNull: false,
            onDelete: 'CASCADE'
        });
        Order.hasMany(models.OrderItem, {
            foreignKey: 'OrderId', 
            allowNull: false,
            onDelete: 'CASCADE'
        });
    };

    return Order;
};
