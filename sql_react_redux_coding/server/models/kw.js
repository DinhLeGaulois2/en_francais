module.exports = function (sequelize, DataTypes) {
    const Kw = sequelize.define("kw", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        expr: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        }
    });

    return Kw;
}