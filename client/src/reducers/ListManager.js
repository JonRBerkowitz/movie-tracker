function listReducer (state = { loading: false, lists: [], current_list: [] }, action) {
	switch(action.type) {

	case 'LOADING_LIST':
    console.log("LOADING...");
    return Object.assign({}, state, {loading: true});

	case 'FETCH_LIST':
    console.log("FETCHING LIST");
    return { ...state, loading: false, lists: action.payload, current_list: action.current_list };

    case 'SWITCH_LIST':
    console.log("SWITCHING");
    return { ...state, current_list: action.payload }

    case 'ADD_MOVIE':
    console.log("MOVIE ADDED")
    return Object.assign({}, state, {loading: true});

    case 'UPDATE_LIST':
    console.log(action.payload)
    return { ...state, current_list: {...state.current_list, movies: state.current_list.movies.concat(action.payload) } }
    return state;

    case 'REMOVE_MOVIE_FROM_LIST':
    return { ...state, current_list: {...state.current_list, movies: state.current_list.movies.filter(movie => movie.data_id !== action.payload.data_id)} }

    case 'REMOVE_MOVIE':
    console.log("MOVIE REMOVED")
    return state;

	default:
	return state;
	}
}

export default listReducer


