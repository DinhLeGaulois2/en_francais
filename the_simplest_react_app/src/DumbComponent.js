import React from 'react'
import { connect } from 'react-redux'


class DumbComponent extends React.Component {
    render() {
        const { theValue } = this.props
        return (
            <div>
                <h1 align="center">The value is: {theValue }</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    theValue: state.myNumber
})

export default connect(mapStateToProps, null)(DumbComponent)