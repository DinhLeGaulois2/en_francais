import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import cst from './cst'
import actions from './actions'

class SmartComponent extends React.Component {

    render() {
        const { getValueListener } = this.props
        return (
            <p align="center">
                <button className="button" onClick={() => getValueListener(cst.PLUS)}>+5</button>
                <button className="button" onClick={() => getValueListener(cst.MINUS)}>-5</button>
            </p>
        )
    }
}

export default compose(connect(null, actions))(SmartComponent)