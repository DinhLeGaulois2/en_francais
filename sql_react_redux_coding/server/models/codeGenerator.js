module.exports = function (sequelize, DataTypes) {
    const CodeGenerator = sequelize.define("codeGenerator", {
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
        comment: {
            type: DataTypes.STRING(999)
        },
        version: {
            type: DataTypes.STRING
        }
    });

    return CodeGenerator;
}