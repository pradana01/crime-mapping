import {createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'

const reducers = combineReducers({
    userReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store