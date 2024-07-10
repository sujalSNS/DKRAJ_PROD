module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
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

    return User;
};
