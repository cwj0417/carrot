import * as types from '../types'
export const stateInit = {
    cur: '',
    curFilter: {}
}
export default (state = {}, {type, payload}) => {
    switch (type) {
        case types.state_set:
            return {
                ...state,
                [payload.key]: payload.value
            }
            break
        default:
            return state
    }
}