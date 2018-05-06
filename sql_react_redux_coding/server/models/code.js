module.exports = function (sequelize, DataTypes) {
    const Code = sequelize.define("code", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        code: {
            type: DataTypes.TEXT('medium'),
            validate: {
                notEmpty: true,
            }
        },
        comment: {
            type: DataTypes.STRING(999)
        },
        libOrFramework: {
            type: DataTypes.STRING
        },
        language: {
            type: DataTypes.STRING
        }
    });

    return Code;
}