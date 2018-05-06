const Sequelize = require('sequelize');

const db = require("../models");

module.exports = function (app) {
    app.put("api/update/user", (req, res, next) => {
        const d = req.body
        db.user.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.user.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/update/feature", (req, res, next) => {
        const d = req.body
        db.feature.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.feature.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/update/code", (req, res, next) => {
        const d = req.body
        db.code.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.code.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/update/feature/note", (req, res, next) => {
        const d = req.body
        db.featureNote.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.featureNote.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/update/generator", (req, res, next) => {
        const d = req.body
        db.codeGenerator.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.codeGenerator.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/update/generator/part", (req, res, next) => {
        const d = req.body
        db.codePartOf.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.codePartOf.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/update/project", (req, res, next) => {
        const d = req.body
        db.project.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.project.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/update/project/frontend", (req, res, next) => {
        const d = req.body
        db.frontEnd.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.frontEnd.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/update/project/backend", (req, res, next) => {
        const d = req.body
        db.backEnd.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.backEnd.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/update/project/database", (req, res, next) => {
        const d = req.body
        db.db.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.db.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/update/project/back2Db", (req, res, next) => {
        const d = req.body
        db.back2Db.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.back2Db.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/update/front2back", (req, res, next) => {
        const d = req.body
        db.front2back.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.front2back.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/update/frontEndNote", (req, res, next) => {
        const d = req.body
        db.frontEndNote.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.frontEndNote.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/update/backEndNote", (req, res, next) => {
        const d = req.body
        db.backEndNote.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.backEndNote.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/update/dbNote", (req, res, next) => {
        const d = req.body
        db.dbNote.findAll({ where: { id: d.id } })
            .then(data => {
                if (data.length > 0) {
                    db.dbNote.update(d, { where: { id: d.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })
}