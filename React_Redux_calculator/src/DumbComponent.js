import React from 'react'
import { connect } from 'react-redux'


class DumbComponent extends React.Component {
    render() {
        const { calc } = this.props
        return (
            <div>
                {calc.result.length > 0 &&
                    <h1 align="center">{calc.number1} {calc.operator} {calc.number2} = {calc.result}</h1>
                }

                {calc.result.length === 0 &&
                    <h1 align="center">{calc.number1} {calc.operator} {calc.number2}</h1>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    calc: state
})

export default connect(mapStateToProps, null)(DumbComponent)