import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles actions of type SAVE_COMMENT', () => {
    // just create a FAKE action
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }

    const newState = commentsReducer([], action)

    expect(newState).toEqual(['New Comment'])
})

it('handles action with unknown type', () => {
    // with an empty object, it's just like we
    // pass <b>unknown types</b> to the reducer
    const newState = commentsReducer([], {})

    expect(newState).toEqual([])
})