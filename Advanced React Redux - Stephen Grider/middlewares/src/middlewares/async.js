export default ({ dispatch }) => next => action => {
    if (!action.payload || !action.payload.then) {
        return next(action)
    }

    // We want to wait for the promise to resolve
    // (get its data!!!) and the create a new action
    // with that data and  dispatch it
    action.payload.then(response => {
        const newAction = { ...action, payload: response }
        // we dispatch the "newAction" as
        // new data for the "action" creator
        dispatch(newAction)
    })
}