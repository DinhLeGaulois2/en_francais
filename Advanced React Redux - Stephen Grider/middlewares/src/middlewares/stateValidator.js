import tv4 from 'tv4'
import stateSchema from 'middlewares/stateSchema'

export default ({ dispatch, getState }) => next => action => {
    // How it works? the validator want the action go through
    // EVERY other middlewares AND the reducer. Then, it will
    // work on the result: LOGIC! we don't valid something that
    // is not been created and treated yet!!!!!
    next(action)
    // After "next(action)", the reducer received new data
    //   and the "store" has been updated! Now, we could 
    //   do validation

    // we are going the make validation after ...
    // if the validation is failed, show message
    if(!tv4.validate(getState(), stateSchema)){
        console.warn('Invalid state schema detected')
    }
}