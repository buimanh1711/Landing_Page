import { combineReducers } from 'redux'
import webReducer from './web.reducer'

const rootReducer = combineReducers({
  web: webReducer
})

export default rootReducer