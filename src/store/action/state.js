import * as types from '../types'

export const state_set = (key, value) => {
    return dispatch => {
        dispatch({
            type: types.state_set,
            payload: {key, value}
        })
    }
}
