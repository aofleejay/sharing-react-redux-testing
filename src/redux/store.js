import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import commentReducer from './comment'

const reducers = combineReducers({
  comments: commentReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
