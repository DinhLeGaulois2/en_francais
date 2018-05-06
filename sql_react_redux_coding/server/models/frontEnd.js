module.exports = function (sequelize, DataTypes) {
    const FrontEnd = sequelize.define("frontEnd", {
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
        },
        description: {
            type: DataTypes.STRING(500)
        }
    });

    return FrontEnd;
}