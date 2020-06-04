import cst from './cst'

const initialStates = {
    number1: "",
    number2: "",
    operator: "",
    result: "",
}

const reducer = (state = initialStates, action) => {
    switch (action.type) {
        case cst.GET_NUMBER: {
            let n1 = state.number1
            let n2 = state.number2
            let newOp = state.operator
            let newResult = state.result
            if (newResult.length > 0) {
                newResult = ""
                newOp = ""
                n1 = action.payload
                n2 = ""
            }
            else {
                // first number
                if (state.operator.length === 0)
                    n1 += action.payload
                else n2 += action.payload
            }
            return Object.assign({}, state, {
                number1: n1,
                number2: n2,
                operator: newOp,
                result: newResult,
            })
        }
        case cst.GET_OP: {
            return Object.assign({}, state, { operator: action.payload })
        }
        case cst.MAKE_CALCULATION: {
            const val1 = parseFloat(state.number1)
            const val2 = parseFloat(state.number2)
            console.log("val1: " + val1 + ", val2: " + val2)
            let total = 0
            switch (state.operator) {
                case cst.PLUS: {
                    console.log(cst.PLUS)
                    total = val1 + val2
                    break
                }
                case cst.MINUS: {
                    console.log(cst.MINUS)
                    total = val1 - val2
                    break
                }
                case cst.MULT: {
                    console.log(cst.MULT)
                    total = val1 * val2
                    break
                }
                case cst.DIV: {
                    console.log(cst.DIV)
                    total = val1 / val2
                    break
                }
                default: return
            }
            console.log("total: " + total)
            return Object.assign({}, state, {
                result: total.toString()
            })
        }
        case cst.CLEAR_VALUES: {
            return { ...initialStates }
        }
        default:
            return state;
    }
}

export default reducer