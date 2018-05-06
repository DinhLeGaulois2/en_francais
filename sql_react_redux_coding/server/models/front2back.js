module.exports = function (sequelize, DataTypes) {
    const Front2back = sequelize.define("front2back", {
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
        json: {
            type: DataTypes.STRING(999),
            validate: {
                notEmpty: true,
            }
        }
    });

    return Front2back;
}