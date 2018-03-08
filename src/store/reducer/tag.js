import * as types from '../types'
export const tagInit = {
    list: []
}
export default (state = {}, {type, payload}) => {
    switch (type) {
        case types.tag_list_set:
            return {
                ...state,
                list: payload
            }
            break
        default:
            return state
    }
}