function listReducer (state = { loading: false, list_data: [], movies: [] }, action) {
	switch(action.type) {

	case 'LOADING_LIST':
    return Object.assign({}, state, {loading: true})

	case 'FETCH_LIST':
    return { loading: false, list_data: action.payload, movies: action.movies }

	default:
	return state;
	}
}

export default listReducer