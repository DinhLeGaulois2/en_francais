module.exports = function (sequelize, DataTypes) {
    const Db = sequelize.define("db", {
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
        description: {
            type: DataTypes.STRING(500),
            validate: {
                notEmpty: true,
            }
        }
    });

    return Db;
}