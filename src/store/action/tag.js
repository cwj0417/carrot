import * as types from '../types'
import {api_tag} from '../../api/index'

export const tag_list_set = payload => ({
    type: types.tag_list_set,
    payload
})

export const tag_init = () => {
    return dispatch => {
        dispatch(tag_list_set())
    }
}

export const tag_filter = filter => {
    return dispatch => {
        dispatch(tag_list_set())
    }
}