import React from 'react'

import SmartComponent from './SmartComponent'
import DumbComponent from './DumbComponent'

import './style.css'

class MainComponent extends React.Component {

    render() {
        return (
            <div><br/><br/><br/>
                <hr/>
                <h1 align="center">Calculator</h1>
                <SmartComponent />
                <hr />
                <DumbComponent />
            </div>
        )
    }
}

export default MainComponent