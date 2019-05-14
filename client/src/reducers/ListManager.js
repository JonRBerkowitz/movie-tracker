function listReducer (state = { loading: false, lists: [], current_list: [] }, action) {
	switch(action.type) {

	case 'LOADING_LIST':
    return Object.assign({}, state, {loading: true});

	case 'FETCH_LIST':
    return { ...state, loading: false, lists: action.payload, current_list: action.current_list };

    case 'SWITCH_LIST':
    return { ...state, current_list: action.payload }

    case 'ADD_MOVIE':
    return Object.assign({}, state, {loading: true});

    case 'UPDATE_LIST':
    const movies = (state.current_list.movies.length > 0 ? [...state.current_list.movies, action.payload] : action.payload)
    return { ...state, current_list: {...state.current_list, movies: [...state.current_list.movies, action.payload] } }

    case 'REMOVE_MOVIE_FROM_LIST':
    return { ...state, current_list: {...state.current_list, movies: state.current_list.movies.filter(movie => movie.data_id !== action.payload.data_id)} }

    case 'CREATE_LIST':
    return Object.assign({}, state, {loading: true});

    case 'ADD_LIST':
    console.log(action.payload)
    return { loading: false, lists: state.lists.concat(action.payload), current_list: {...action.payload, movies: []} }

	default:
	return state;
	}
}

export default listReducer


