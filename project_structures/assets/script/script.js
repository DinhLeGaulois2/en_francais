let ui_struct = {
    name: "MainMenuContainer",
    add: {
        name: "AddUIContainer",
        addFileOne: {
            name: "AddOneContainer",
            data4Init: [],
            dataFromForm: [],
            handlers: []
        }
    },

    display: {
        name: "DisplayUIContainer",
        displayFileOne: {
            name: "ShowOneContainer",
            dataIn: [],
            handlers: []
        }
    }
}

let create2server_struct = {}

let readFromServer_struct = {}

let update_struct = {}

let delete_struct = {}

// We could almost use "models" for MongoDB/Sequelize directly.
// Need just some "Regex" to make changes ...
let models_struct = {}