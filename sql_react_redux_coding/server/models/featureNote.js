module.exports = function (sequelize, DataTypes) {
    const FeatureNote = sequelize.define("featureNote", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        note: {
            type: DataTypes.STRING(999),
            validate: {
                notEmpty: true,
            }
        }
    });

    return FeatureNote;
}