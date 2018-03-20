import * as types from '../types'
import {api_tag} from '../../api/index'

const tag_list_set = payload => ({
    type: types.tag_list_set,
    payload
})

const tag_list_push = payload => ({
    type: types.tag_list_push,
    payload
})

export const tag_init = () => {
    return dispatch => {
        api_tag.init()
            .then(res => {
                dispatch(tag_list_set(res))
            }, err => {
                dispatch(tag_list_set([]))
            })
    }
}

export const tag_create = (name, content) => {
    return dispatch => {
        api_tag.create(name, content)
            .then(res => {
                dispatch(tag_list_push(res))
            }, err => {
                // existed
                return Promise.reject(err)
            })
    }
}

export const tag_delete = (name) => {
    return dispatch => {
        api_tag.delete(name)
            .then(res => {
                dispatch(tag_list_set(res))
            })
    }
}