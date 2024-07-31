module.exports = (sequelize, DataTypes) => {
    const Size = sequelize.define("Size", {
        sizeID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    Size.associate = function (models) {
        Size.belongsTo(models.Product, {
            foreignKey: 'ProductId',
            onDelete: 'CASCADE',
        });
    };

    return Size;
};
