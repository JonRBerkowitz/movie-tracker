import { combineReducers } from 'redux';
import searchReducer from './searchManager';
import listReducer from './ListManager'

const rootReducer = combineReducers({
	search: searchReducer,
	lists: listReducer
})

export default rootReducer
