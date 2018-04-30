let ui_struct = {
    name: "MainMenuContainer",
    add: {
        name: "AddUIContainer",
        addFileOne: {
            name: "AddOneContainer",
            data4Init: [],
        }
    },

    display: {
        name: "DisplayUIContainer",
        displayFileOne: {
            name: "ShowOneContainer",
            dataIn: [],
        }
    }
}

let requests_struct = {
    // {
    //      "afunction: ()": "explanation"
    // }
    create:{

    },
    read: {

    },
    update: {

    },
    delete: {

    },
    others: {

    }
}

let create2server_struct = {}

let readFromServer_struct = {}

let update_struct = {}

let delete_struct = {}

// We could almost use "models" for MongoDB/Sequelize directly.
// Need just some "Regex" to make changes ...
let models_struct = {}