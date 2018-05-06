const Sequelize = require('sequelize');
const models = require('../models') // DB's models
var sequelize = models.sequelize

const db = require("../models");

module.exports = function (app) {
    app.post("api/add/user", (req, res, next) => {
        const d = req.body
        db.user.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.user.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })

    app.post("api/add/feature", (req, res, next) => {
        const d = req.body
        db.feature.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.feature.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })

    app.post("api/add/code", (req, res, next) => {
        const d = req.body
        db.code.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.code.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })

    app.post("api/add/feature/note", (req, res, next) => {
        const d = req.body
        db.featureNote.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.featureNote.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })

    app.post("api/add/generator", (req, res, next) => {
        const d = req.body
        db.codeGenerator.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.codeGenerator.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })

    app.post("api/add/generator/part", (req, res, next) => {
        const d = req.body
        db.codePartOf.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.codePartOf.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })

    app.post("api/add/project", (req, res, next) => {
        const d = req.body
        db.project.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.project.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })

    app.post("api/add/project/frontend", (req, res, next) => {
        const d = req.body
        db.frontEnd.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.frontEnd.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })

    app.post("api/add/project/backend", (req, res, next) => {
        const d = req.body
        db.backEnd.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.backEnd.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })

    app.post("api/add/project/database", (req, res, next) => {
        const d = req.body
        db.db.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.db.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })

    app.post("api/add/project/back2Db", (req, res, next) => {
        const d = req.body
        db.back2Db.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.back2Db.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })

    app.post("api/add/front2back", (req, res, next) => {
        const d = req.body
        db.front2back.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.front2back.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })

    app.post("api/add/frontEndNote", (req, res, next) => {
        const d = req.body
        db.frontEndNote.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.frontEndNote.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })

    app.post("api/add/backEndNote", (req, res, next) => {
        const d = req.body
        db.backEndNote.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.backEndNote.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })

    app.post("api/add/dbNote", (req, res, next) => {
        const d = req.body
        db.dbNote.findAll({ where: d })
            .then(data => {
                if (data.length == 0) {
                    db.dbNote.create(d)
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json(data)
            })
            .catch(err => next(err))
    })
}