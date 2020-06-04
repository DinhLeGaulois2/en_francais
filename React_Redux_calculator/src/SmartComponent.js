import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import cst from './cst'
import actions from './actions'

class SmartComponent extends React.Component {
    render() {
        const { calc, getNum, getOp } = this.props
        return (
            <div className="container">
                <table align="center"><tbody>
                    <tr>
                        <td>
                            <button className="button" onClick={() => getNum("7")}>7</button>
                        </td>
                        <td>
                            <button className="button" onClick={() => getNum("8")}>8</button>
                        </td>
                        <td>
                            <button className="button" onClick={() => getNum("9")}>9</button>
                        </td>
                        <td>
                            {calc.number1.length > 0 && (calc.number2.length === 0) &&
                                <button className="button" onClick={() => getOp(cst.DIV)}>/</button>
                            }
                            {calc.number2.length > 0 &&
                                <button className="button-inactive">/</button>
                            }
                            {calc.number1.length === 0 &&
                                <button className="button-inactive">/</button>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="button" onClick={() => getNum("4")}>4</button>
                        </td>
                        <td>
                            <button className="button" onClick={() => getNum("5")}>5</button>
                        </td>
                        <td>
                            <button className="button" onClick={() => getNum("6")}>6</button>
                        </td>
                        <td>
                            {calc.number1.length > 0 && (calc.number2.length === 0) &&
                                <button className="button" onClick={() => getOp(cst.MULT)}>x</button>
                            }
                            {calc.number2.length > 0 &&
                                <button className="button-inactive">x</button>
                            }
                            {calc.number1.length === 0 &&
                                <button className="button-inactive">x</button>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="button" onClick={() => getNum("1")}>1</button>
                        </td>
                        <td>
                            <button className="button" onClick={() => getNum("2")}>2</button>
                        </td>
                        <td>
                            <button className="button" onClick={() => getNum("3")}>3</button>
                        </td>
                        <td>
                            {calc.number1.length > 0 && (calc.number2.length === 0) &&
                                <button className="button" onClick={() => getOp(cst.MINUS)}>-</button>
                            }
                            {calc.number2.length > 0 &&
                                <button className="button-inactive">-</button>
                            }
                            {calc.number1.length === 0 &&
                                <button className="button-inactive">-</button>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="button" onClick={() => getNum("0")}>0</button>
                        </td>
                        <td>
                            <button className="button" onClick={() => getNum(".")}>.</button>
                        </td>
                        <td>
                            {!isNaN(calc.number2) &&
                                <div>
                                    {calc.operator === cst.DIV && parseFloat(calc.number2) === 0 &&
                                        <button className="button-inactive">=</button>
                                    }
                                    {calc.operator === cst.DIV && parseFloat(calc.number2) > 0 &&
                                        <button className="button" onClick={() => getOp(cst.EQUAL)}>=</button>
                                    }
                                    {calc.operator === cst.DIV && parseFloat(calc.number2) < 0 &&
                                        <button className="button" onClick={() => getOp(cst.EQUAL)}>=</button>
                                    }
                                    {calc.operator !== cst.DIV && calc.number2.length > 0 &&
                                        <button className="button" onClick={() => getOp(cst.EQUAL)}>=</button>
                                    }
                                </div>
                            }
                            {calc.number2.length === 0 &&
                                <button className="button-inactive">=</button>
                            }
                        </td>
                        <td>
                            {calc.number1.length > 0 && (calc.number2.length === 0) &&
                                <button className="button" onClick={() => getOp(cst.PLUS)}>+</button>
                            }
                            {calc.number2.length > 0 &&
                                <button className="button-inactive">+</button>
                            }
                            {calc.number1.length === 0 &&
                                <button className="button-inactive">+</button>
                            }
                        </td>
                    </tr>
                </tbody></table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    calc: state,
})

export default compose(connect(mapStateToProps, actions))(SmartComponent)