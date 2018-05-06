module.exports = function (sequelize, DataTypes) {
    const CodePartOf = sequelize.define("codePartOf", {
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
        partName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        }
    });

    return CodePartOf;
}