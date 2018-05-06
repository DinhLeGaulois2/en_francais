module.exports = function (sequelize, DataTypes) {
    const FrontEndNote = sequelize.define("frontEndNote", {
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

    return FrontEndNote;
}