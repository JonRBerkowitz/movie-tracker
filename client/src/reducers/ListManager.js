function listReducer (state = { loading: false, list_data: [], movies: [] }, action) {
	switch(action.type) {

	case 'LOADING_LIST':
    return Object.assign({}, state, {loading: true});

	case 'FETCH_LIST':
    return { loading: false, list_data: action.payload, movies: action.movies };

    case 'ADD_MOVIE':
    console.log("MOVIE ADDED")
    return Object.assign({}, state, {loading: true});

    case 'UPDATE_LIST':
    let index = state.movies.findIndex(movie => movie.data_id == action.payload.data_id);

    if (index == -1) {
        return { loading: false, list_data: state.list_data, movies: [...state.movies, action.payload] }
    } else {
        return state;
    }

    case 'REMOVE_MOVIE':
    console.log("MOVIE REMOVED")
    return state;

	default:
	return state;
	}
}

export default listReducer