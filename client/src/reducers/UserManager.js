function userReducer (state = { loading: false, logged_in: false }, action) {
	switch(action.type) {

	case 'LOG_IN':
	console.log("LOG IN")
    return Object.assign({}, state, {loading: true})

    case 'LOGGED_IN':
    console.log("LOG IN SUCCESS")
    return { loading: false, logged_in: true }


	default:
	return state;
	}
}

export default userReducer