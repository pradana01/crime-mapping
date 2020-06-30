import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import reportReducer from './reducers/reportReducer'

const reducers = combineReducers({
    userReducer,
    reportReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store