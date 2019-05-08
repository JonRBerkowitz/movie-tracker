import { combineReducers } from 'redux';
import searchReducer from './searchManager';
import listReducer from './ListManager';
import movieReducer from './MovieManager'

const rootReducer = combineReducers({
	search: searchReducer,
	lists: listReducer,
	movie: movieReducer
})

export default rootReducer
