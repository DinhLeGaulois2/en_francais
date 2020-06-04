import cst from './cst'

const initialStates = {
    myNumber: 0
}

const reducer = (state = initialStates, action) => {
    switch (action.type) {
        case cst.ADD_NEW_DATA: {
            let newVal = state.myNumber
            if (action.payload === cst.PLUS)
                newVal += 5
            if (action.payload === cst.MINUS)
                newVal -= 5
            return Object.assign({}, state, {
                myNumber: newVal
            })
        }
        default:
            return state;
    }
}

export default reducer