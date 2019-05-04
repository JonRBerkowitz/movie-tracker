import { combineReducers } from 'redux';
import searchReducer from './searchManager';
import listReducer from './ListManager';
import watchedListReducer from './WatchedListManager'

const rootReducer = combineReducers({
	search: searchReducer,
	lists: listReducer,
	watchedList : watchedListReducer
})

export default rootReducer
