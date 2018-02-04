import * as types from '../types'
import {api_material} from '../../api/index'

export const material_list_set = list => ({
    type: types.material_list_set,
    payload: list
})

export const material_init = () => {
    return dispatch => {
        dispatch(material_list_set(api_material.init()))
    }
}

export const material_filter = filter => {
    return dispatch => {
        dispatch(material_list_set(api_material.filter(filter)))
    }
}