import { combineReducers } from 'redux';
import searchReducer from './searchManager';
import listReducer from './ListManager';
import movieReducer from './MovieManager';
import userReducer from './UserManager';

const rootReducer = combineReducers({
	search: searchReducer,
	lists: listReducer,
	movie: movieReducer,
	user: userReducer
})

export default rootReducer
