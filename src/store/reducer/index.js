import {combineReducers} from 'redux'

import material, {materialInit} from './material'

export default combineReducers({
    material
})

export const initialState = {
    material: materialInit
}
