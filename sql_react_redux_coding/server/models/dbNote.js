module.exports = function (sequelize, DataTypes) {
    const DbNote = sequelize.define("dbNote", {
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

    return DbNote;
}