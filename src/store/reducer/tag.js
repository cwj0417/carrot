import * as types from '../types'
export const tagInit = {
    list: []
}
export default (state = {}, {type, payload}) => {
    switch (type) {
        case types.tag_list_set:
            break
        default:
            return state
    }
}