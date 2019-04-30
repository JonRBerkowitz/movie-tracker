function searchReducer (state = { loading: false, movies: [] }, action) {
	switch(action.type) {

	case 'LOADING_MOVIES':
    return Object.assign({}, state, {loading: true})

	case 'FETCH_MOVIES':
    return { loading: false, movies: action.payload }

	default:
	return state;
	}
}

export default searchReducer