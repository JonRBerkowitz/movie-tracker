function listReducer (state = { loading: false, lists: [] }, action) {
	switch(action.type) {

	case 'LOADING_LIST':
    return Object.assign({}, state, {loading: true})

	case 'FETCH_LIST':
    return { loading: false, lists: action.payload }

	default:
	return state;
	}
}

export default listReducer