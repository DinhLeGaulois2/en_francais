'use strict';

var conf = require('../../MY_PRIVATE_FOLDER/config_params')

// the Object from the library ...
var Sequelize = require('sequelize');

var db = {};

var sequelize = new Sequelize(conf.db_name, conf.db_username, conf.db_pwd, {
    host: conf.db_host,
    dialect: conf.db_dialect,
    logging: false,
    freezeTableName: true,
    operatorsAliases: false
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.back2Db = require('../models/back2Db.js')(sequelize, Sequelize)
db.backEnd = require('../models/backEnd.js')(sequelize, Sequelize)
db.backEnd_db = require('../models/backEnd_db.js')(sequelize, Sequelize)
db.code = require('../models/code.js')(sequelize, Sequelize)
db.codeGenerator = require('../models/codeGenerator.js')(sequelize, Sequelize)
db.codePartOf = require('../models/codePartOf.js')(sequelize, Sequelize)
db.constant = require('../models/constant.js')(sequelize, Sequelize)
db.db = require('../models/db.js')(sequelize, Sequelize)
db.feature = require('../models/feature.js')(sequelize, Sequelize)
db.featureNote = require('../models/featureNote.js')(sequelize, Sequelize)
db.feature_kw = require('../models/feature_kw.js')(sequelize, Sequelize)
db.front2back = require('../models/front2back.js')(sequelize, Sequelize)
db.frontEnd = require('../models/frontEnd.js')(sequelize, Sequelize)
db.front_backEnd = require('../models/front_backEnd.js')(sequelize, Sequelize)
db.kw = require('../models/kw.js')(sequelize, Sequelize)
db.project = require('../models/project.js')(sequelize, Sequelize)
db.user = require('../models/user.js')(sequelize, Sequelize)


db.backEnd_db.belongsTo(db.db)
db.db.hasMany(db.backEnd_db)

db.codePartOf.belongsTo(db.codeGenerator)
db.codeGenerator.hasMany(db.codePartOf)

db.codeGenerator.belongsTo(db.user)
db.user.hasMany(db.codeGenerator)

db.featureNote.belongsTo(db.feature)
db.feature.hasMany(db.featureNote)

db.back2Db.belongsTo(db.backEnd_db)
db.backEnd_db.hasMany(db.back2Db)

db.backEnd_db.belongsTo(db.backEnd)
db.backEnd.hasMany(db.backEnd_db)

db.project.belongsTo(db.user)
db.user.hasMany(db.project)

db.frontEnd.belongsTo(db.project)
db.project.hasMany(db.frontEnd)

db.feature.belongsTo(db.user)
db.user.hasMany(db.feature)

db.code.belongsTo(db.feature)
db.feature.hasMany(db.code)

db.front_backEnd.belongsTo(db.backEnd)
db.backEnd.hasMany(db.front_backEnd)

db.front_backEnd.belongsTo(db.frontEnd)
db.frontEnd.hasMany(db.front_backEnd)

db.feature_kw.belongsTo(db.kw)
db.kw.hasMany(db.feature_kw)

db.front2back.belongsTo(db.front_backEnd)
db.front_backEnd.hasMany(db.front2back)

module.exports = db;