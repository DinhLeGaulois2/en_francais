const Sequelize = require('sequelize');

const db = require("../models");


module.exports = function (app) {
    app.get("/api/get/projects/all/:userId", (req, res, next) => {
        db.project.findAll({ 
            where: { userId: req.params.userId },
            attributes: ['id', 'name', 'companyName', 'type', 'description', 'url']
        })
        .then(data => res.status(200).json(data))
        .catch(err => next(err))
    })

    app.get("/api/get/project/:id", (req, res, next) => {
        db.project.findAll({
            where: { id: req.params.id },
            attributes: ['id', 'name', 'companyName', 'type', 'description', 'url'],
            include: [
                {
                    model: db.frontEnd,
                    attributes: ['id', 'toolName', 'description'],
                    include: [
                        {
                            model: db.frontEndNote,
                            attributes: ['id', 'note', 'url']
                        },
                        {
                            model: front_backEnd,
                            attributes: ['id'],
                            include: [
                                {
                                    model: db.front2back,
                                    attributes: ['id', 'name', 'json', 'url']
                                },
                                {
                                    model: db.backEnd,
                                    attributes: ['id', 'toolName', 'description'],
                                    include: [
                                        {
                                            model: db.backEndNote,
                                            attributes: ['id', 'note', 'url']
                                        },
                                        {
                                            model: db.backEnd_db,
                                            attributes: ["id"],
                                            include: [
                                                {
                                                    model: db.back2Db,
                                                    attributes: ['id', 'name', 'json', 'url']
                                                },
                                                {
                                                    model: db.db,
                                                    attributes: ['id', 'name', 'description'],
                                                    include: [
                                                        {
                                                            model: db.dbNote,
                                                            attributes: ['id', 'note', 'url']
                                                        }
                                                    ]
                                                }                                                
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }).then(data => res.status(200).json(data))
        .catch(err => next(err))
    })
    
    app.get("/api/get/generators/all/:userId", (req, res, next) => {
        db.codeGenerator.findAll({ 
            where: { id: req.params.userId },
            attributes: ['id', 'toolName', 'comment', 'version']
        })
        .then(data => res.status(200).json(data))
        .catch(err => next(err))
    })
    
    app.get("/api/get/generator/:id", (req, res, next) => {
        db.codeGenerator.findAll({ 
            where: { id: req.params.id },
            attributes: ['id', 'toolName', 'comment', 'version'],
            include: [
                {
                    model: db.codePartOf,
                    attributes: ['id', 'code', 'partName']
                }
            ]
        })
        .then(data => res.status(200).json(data))
        .catch(err => next(err))
    })
    
    app.get("/api/get/features/all/:userId", (req, res, next) => {
        db.feature.findAll({ 
            where: { id: req.params.userId },
            attributes: ['id', 'name', 'comment', 'position', 'version', 'url', 'cstTypeId']
        })
        .then(data => res.status(200).json(data))
        .catch(err => next(err))
    })
    
    app.get("/api/get/feature/:id", (req, res, next) => {
        db.feature.findAll({ 
            where: { id: req.params.id },
            attributes: ['id', 'name', 'comment', 'position', 'version', 'url', 'cstTypeId'],
            include: [
                {
                    model: db.code,
                    attributes: ['id', 'code', 'comment', 'language', 'libOrFramework']
                },
                {
                    model: db.featureNote,
                    attributes: ['id', 'note']
                },
                {
                    model: db.feature_kw,
                    attributes: ['id'],
                    include: [
                        {
                            model: db.kw,
                            attributes: ['id', 'expr']
                        }
                    ]
                }
            ]
        })
        .then(data => res.status(200).json(data))
        .catch(err => next(err))
    })
}