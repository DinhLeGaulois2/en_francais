const Sequelize = require('sequelize');
const db = require("../models");

const initData = require("./data.js");

let letInitiate = (callback) => {
    db.constant.findAll()
        .then(data => {
            if (data.length == 0) { // initiate only if it wasn't initiated yet
                db.constant.bulkCreate(initData)
                    .then(data => {
                        db.user.findAll()
                            .then(data => {
                                if (data.length == 0) {
                                    db.user.create({ name: "King of my room", email: "me@email.com", pwd: "VerySecretWord" })
                                        .then(data => {
                                            console.log("Database Initiated Successfully!")
                                            callback()
                                        })
                                        .catch(err => console.log("Error to create the first user! err: " + err))
                                }
                                else callback()
                            })
                            .catch(err => console.log("Error in finding user! err: " + err))
                    })
                    .catch(err => console.log("Error in creating constants! err: " + err))
            }
            else {
                console.log("The Database is Already Initiated")
                callback()
            }
        })// if it is already "initiated", no need to do one more time
        .catch(err => console.log("Error of Initiation! err: " + err))
}

module.exports = letInitiate;