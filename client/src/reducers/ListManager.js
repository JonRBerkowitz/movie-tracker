function listReducer (state = { loading: false, list_data: [], movies: [] }, action) {
	switch(action.type) {

	case 'LOADING_LIST':
    return Object.assign({}, state, {loading: true});

	case 'FETCH_LIST':
    return { loading: false, list_data: action.payload, movies: action.movies };

    case 'ADD_MOVIE':
    console.log("MOVIE ADDED")
    return state;

    case 'REMOVE_MOVIE':
    console.log("MOVIE REMOVED")
    return state;

	default:
	return state;
	}
}

export default listReducer