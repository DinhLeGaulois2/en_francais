const Sequelize = require('sequelize');

const db = require("../models");

module.exports = function (app) {
    app.put("api/add/user/:id", (req, res, next) => {
        const d = req.body
        db.user.findAll({ where: { id: req.params.id } })
            .then(data => {
                if (data.length > 0) {
                    db.user.update(d, { where: { id: req.params.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/add/feature/:id", (req, res, next) => {
        const d = req.body
        db.feature.findAll({ where: { id: req.params.id } })
            .then(data => {
                if (data.length > 0) {
                    db.feature.update(d, { where: { id: req.params.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/add/code/:id", (req, res, next) => {
        const d = req.body
        db.code.findAll({ where: { id: req.params.id } })
            .then(data => {
                if (data.length > 0) {
                    db.code.update(d, { where: { id: req.params.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/add/feature/note/:id", (req, res, next) => {
        const d = req.body
        db.featureNote.findAll({ where: { id: req.params.id } })
            .then(data => {
                if (data.length > 0) {
                    db.featureNote.update(d, { where: { id: req.params.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/add/generator/:id", (req, res, next) => {
        const d = req.body
        db.codeGenerator.findAll({ where: { id: req.params.id } })
            .then(data => {
                if (data.length > 0) {
                    db.codeGenerator.update(d, { where: { id: req.params.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/add/generator/part/:id", (req, res, next) => {
        const d = req.body
        db.codePartOf.findAll({ where: { id: req.params.id } })
            .then(data => {
                if (data.length > 0) {
                    db.codePartOf.update(d, { where: { id: req.params.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/add/project/:id", (req, res, next) => {
        const d = req.body
        db.project.findAll({ where: { id: req.params.id } })
            .then(data => {
                if (data.length > 0) {
                    db.project.update(d, { where: { id: req.params.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/add/project/frontend/:id", (req, res, next) => {
        const d = req.body
        db.frontEnd.findAll({ where: { id: req.params.id } })
            .then(data => {
                if (data.length > 0) {
                    db.frontEnd.update(d, { where: { id: req.params.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/add/project/backend/:id", (req, res, next) => {
        const d = req.body
        db.backEnd.findAll({ where: { id: req.params.id } })
            .then(data => {
                if (data.length > 0) {
                    db.backEnd.update(d, { where: { id: req.params.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/add/project/database/:id", (req, res, next) => {
        const d = req.body
        db.db.findAll({ where: { id: req.params.id } })
            .then(data => {
                if (data.length > 0) {
                    db.db.update(d, { where: { id: req.params.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/add/project/back2Db/:id", (req, res, next) => {
        const d = req.body
        db.back2Db.findAll({ where: { id: req.params.id } })
            .then(data => {
                if (data.length > 0) {
                    db.back2Db.update(d, { where: { id: req.params.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })

    app.put("api/add/front2back/:id", (req, res, next) => {
        const d = req.body
        db.front2back.findAll({ where: { id: req.params.id } })
            .then(data => {
                if (data.length > 0) {
                    db.front2back.update(d, { where: { id: req.params.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => next(err))
                }
                else res.status(200).json({ msg: "Object Not Found: No Updating!" })
            })
            .catch(err => next(err))
    })
}