import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types'
import axios from 'axios'

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    // note, we should delete the "s" in the original "https" to avoid error
    // message from some browser complaining about security's problems
    const response = axios.get('http://jsonplaceholder.typicode.com/comments')

    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

export function changeAuth(isLoggedIn){
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}