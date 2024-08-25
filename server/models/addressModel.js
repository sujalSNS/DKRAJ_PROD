module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define("Address", {
        addressID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        area: {
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
        pincode: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Address.associate = function(models) {
        Address.belongsTo(models.User, {
            foreignKey: 'UserId',
            onDelete: 'CASCADE'
        });
    };

    return Address;
};




