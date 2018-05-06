const Sequelize = require('sequelize');
var sequelize = models.sequelize

const db = require("../models");

module.exports = function (app) {
    app.delete("api/delete/project/:id", (req, res, next) => {
        db.project.delete({where: { id: req.params.id}})
        .then(data => res.status(200).json(data))
        .catch(err => next(err))
    })
    
    app.delete("api/delete/codeGenerator/:id", (req, res, next) => {
        db.codeGenerator.delete({where: { id: req.params.id}})
        .then(data => res.status(200).json(data))
        .catch(err => next(err))
    })
    
    app.delete("api/delete/feature/:id", (req, res, next) => {
        db.feature.delete({where: { id: req.params.id}})
        .then(data => res.status(200).json(data))
        .catch(err => next(err))
    })    
    
    app.delete("api/delete/user/:id", (req, res, next) => {
        db.user.delete({where: { id: req.params.id}})
        .then(data => res.status(200).json(data))
        .catch(err => next(err))
    })
}