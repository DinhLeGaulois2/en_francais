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
        comment: {
            type: DataTypes.STRING(999)
        },
        position: {
            type: DataTypes.INTEGER
        },
        version: {
            type: DataTypes.INTEGER
        },
        cstTypeId: {
            type: DataTypes.INTEGER
        },
        url: {
            type: DataTypes.STRING(500)
        },
        cstTypeId: {
            type: DataTypes.INTEGER
        },
    });

    return Feature;
}