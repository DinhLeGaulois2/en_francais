module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        pwd: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
    });

    return User;
}