module.exports = function (sequelize, DataTypes) {
    const Project = sequelize.define("project", {
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
        companyName: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        url: {
            type: DataTypes.STRING(500)
        },
        description: {
            type: DataTypes.STRING(999)
        }
    });

    return Project;
}