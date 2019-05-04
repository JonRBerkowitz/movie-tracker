export function addMovieToList(movie) {
	return (dispatch) => { 
		dispatch({ type: 'ADD_MOVIE' });
		return fetch('/movies/create')
	};
}

export function removeMovieFromList() {
	return (dispatch) => { dispatch({ type: 'REMOVE_MOVIE' }); }
}
