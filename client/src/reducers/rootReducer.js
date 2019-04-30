import { combineReducers } from 'redux';
import searchReducer from './searchManager'

const rootReducer = combineReducers({
	search: searchReducer
})

export default rootReducer
