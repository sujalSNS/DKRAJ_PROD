module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define("OrderItem", {
        orderItemID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT('long'), 
            allowNull: false
        }
    });

    OrderItem.associate = models => {
        OrderItem.belongsTo(models.Order, {
            foreignKey: 'OrderId', 
            allowNull: false,
            onDelete: 'CASCADE'
        });
        OrderItem.belongsTo(models.Product, {
            foreignKey: 'ProductId', 
            allowNull: false,
            onDelete: 'CASCADE'
        });
    };

    return OrderItem;
};
