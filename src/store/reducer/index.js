import {combineReducers} from 'redux'

import material, {materialInit} from './material'
import tag, {tagInit} from './tag'
import state, {stateInit} from './state'

export default combineReducers({
    material,
    tag,
    state
})

export const initialState = {
    material: materialInit,
    tag: tagInit,
    state: stateInit
}
