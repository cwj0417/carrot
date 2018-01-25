import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers, {initialState} from './reducer/index'

const asycCreateStore = applyMiddleware(thunkMiddleware)(createStore)

export default asycCreateStore(reducers, initialState)