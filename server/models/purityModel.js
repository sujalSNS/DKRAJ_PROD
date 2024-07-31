module.exports = (sequelize, DataTypes) => {
    const Purity = sequelize.define("Purity", {
        purityID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    Purity.associate = function (models) {
        Purity.belongsTo(models.Product, {
            foreignKey: 'ProductId',
            onDelete: 'CASCADE',
        });
    };

    return Purity;
};
