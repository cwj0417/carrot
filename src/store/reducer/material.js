import * as types from '../types'
export const materialInit = {
    list: []
}
export default (state = {}, {type, payload}) => {
    switch (type) {
        case types.material_list_set:
            return {
                ...state,
                list: payload
            }
            break
        default:
            return state
    }
}