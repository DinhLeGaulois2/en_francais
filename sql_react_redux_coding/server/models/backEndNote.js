module.exports = function (sequelize, DataTypes) {
    const BackEndNote = sequelize.define("backEndNote", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        note: {
            type: DataTypes.STRING(500),
            validate: {
                notEmpty: true,
            }
        },
        url: {
            type: DataTypes.STRING(500)
        },
    });

    return BackEndNote;
}