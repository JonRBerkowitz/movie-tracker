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
    const i = state.lists.indexOf(state.current_list)
    const movies = (state.current_list.movies.length > 0 ? [...state.current_list.movies, action.payload] : action.payload)
    const current_list = {...state.current_list, movies: [...state.current_list.movies, action.payload] }
    const new_lists = state.lists
    new_lists[i] = current_list
    return { ...state, lists: new_lists, current_list: current_list }

    case 'REMOVE_MOVIE_FROM_LIST':
    const j = state.lists.indexOf(state.current_list)
    const rem_current_list = {...state.current_list, movies: state.current_list.movies.filter(movie => movie.data_id !== action.payload.data_id)}
    const rem_new_lists = state.lists
    rem_new_lists[j] = rem_current_list
    return { ...state, lists: rem_new_lists, current_list: rem_current_list }

    case 'CREATE_LIST':
    return Object.assign({}, state, {loading: true});

    case 'ADD_LIST':
    console.log(action.payload)
    return { loading: false, lists: state.lists.concat(action.payload), current_list: {...action.payload, movies: []} }

	case 'DELETE_LIST':
    return Object.assign({}, state, {loading: true});

    case 'REMOVE_LIST':
    const index = state.lists.indexOf(state.current_list)
    const current_list_chooser = (index === 0 ? state.lists[1] : state.lists[0])
    const lists = state.lists.filter(list => list.id !== state.current_list.id)
    return { loading: false, lists: lists, current_list: current_list_chooser }

    default:
	return state;
	}
}

export default listReducer


