module.exports = function (sequelize, DataTypes) {
    const Constant = sequelize.define("constant", {
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
        type: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        }
    });

    return Constant;
}