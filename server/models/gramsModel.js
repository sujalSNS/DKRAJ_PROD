module.exports = (sequelize, DataTypes) => {
    const Grams = sequelize.define("Grams", {
        gramsID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
                isFloat: true
            }
        }
    });

    Grams.associate = function (models) {
        Grams.belongsTo(models.Product, {
            foreignKey: 'ProductId',
            onDelete: 'CASCADE',
        });
    };

    return Grams;
};
