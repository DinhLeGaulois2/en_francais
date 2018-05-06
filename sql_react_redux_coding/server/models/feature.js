module.exports = function (sequelize, DataTypes) {
    const Feature = sequelize.define("feature", {
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
            type: DataTypes.STRING
        },
        typeName: {
            type: DataTypes.STRING
        },
        comment: {
            type: DataTypes.STRING(999)
        },
        position: {
            type: DataTypes.INTEGER
        },
        version: {
            type: DataTypes.INTEGER
        }
    });

    return Feature;
}