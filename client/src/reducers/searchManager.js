function searchReducer (state = { movies: ["Tommy Boy", "Black Sheep"] }, action) {
	switch(action.type) {

	case 'ADD_MOVIES':
	return state;

	default:
	return state;
	}
}

export default searchReducer