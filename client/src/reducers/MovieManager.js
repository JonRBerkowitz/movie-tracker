function movieReducer (state = { loading: false, movie: [] }, action) {
	switch(action.type) {

	case 'LOADING_MOVIE':
    return Object.assign({}, state, {loading: true})

	case 'FETCH_MOVIE':
    return { loading: false, movie: action.payload }

	default:
	return state;
	}
}

export default movieReducer