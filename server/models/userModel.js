module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        userID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true, 
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: true, 
            validate: {
                isDate: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true, 
            validate: {
                len: [6, 100], 
            },
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isFirebaseAuth: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });



    
    User.associate = function(models) {
        User.hasMany(models.Product, {
            foreignKey: {
                allowNull: false,
            },
            onDelete: 'CASCADE',
        });
    };


    return User;
};
