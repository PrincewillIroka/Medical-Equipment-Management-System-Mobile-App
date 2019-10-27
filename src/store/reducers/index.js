import { combineReducers } from 'redux'
import userReducer from './userReducer'

const reducer = combineReducers({
  userReducer: userReducer
})

export default reducer
