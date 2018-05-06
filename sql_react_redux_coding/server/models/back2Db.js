module.exports = function (sequelize, DataTypes) {
    const Back2Db = sequelize.define("back2Db", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        toolName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        }
    });

    return Back2Db;
}