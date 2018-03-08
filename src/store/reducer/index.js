import {combineReducers} from 'redux'

import material, {materialInit} from './material'
import tag, {tagInit} from './tag'

export default combineReducers({
    material,
    tag
})

export const initialState = {
    material: materialInit,
    tag: tagInit
}
