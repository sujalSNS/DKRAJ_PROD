module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define("Card", {
        cardID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        cardHolderName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cardNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expiryMonth: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        expiryYear: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cvv: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Card.associate = function(models) {
        Card.belongsTo(models.User, {
            foreignKey: 'UserId',
            onDelete: 'CASCADE'
        });
    };

    return Card;
};
