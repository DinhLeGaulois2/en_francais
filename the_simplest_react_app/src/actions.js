import cst from './cst'

const myActions = {
    getValueListener: op => {
        return dispatch =>
            //  transmit the value to the "reducer"
            dispatch({
                type: cst.ADD_NEW_DATA,  // order of the action to do
                payload: op   
            })
    }
}

export default myActions