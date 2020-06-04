import cst from './cst'

const myActions = {
    getNum: val => {
        return dispatch => {
            dispatch({
                type: cst.GET_NUMBER,
                payload: val
            })
        }
    },

    getOp: op => {
        return dispatch => {
            if (op === cst.EQUAL)
                dispatch({
                    type: cst.MAKE_CALCULATION
                })
            else
                dispatch({
                    type: cst.GET_OP,
                    payload: op
                })
        }
    }
}

export default myActions