1 - npx create-react-app the_simplest_react_app
2 - add to "package.json": 
        "scripts": {
            "start": "react-scripts start",
        },
3 - create the folders: "src" and "public" then add the files in it...
4 - Add redux:
        npm i --save-dev redux redux-form react-redux redux-thunk
=============================================================================================
USAGE

1 - npm install (first time ONLY: to install dependencies)
2 - npm run start (to start the app)
=============================================================================================
REMINDER

The direction of the circuling informations:
    "SmartComponent" --> "Actions" --> "Reducer" --> "DumbComponent"

Explanations: 
    * "SmartComponent": using "listener" to catch user's actions
    * "Actions": process the actions from the "SmartComponent" then send it to "Reducers"
    * "Reducer": modify the variables (states) upon the value sent from "Actions"
    * "DumbComponent": display the values from the variables (states)
=============================================================================================
NOTE: the "index.js" and the "index.html" MUST be under the folders "src" and "public" respectively.