export function addMovieToList(movie, list) {
	return (dispatch) => { 
		dispatch({ type: 'ADD_MOVIE' });
		return fetch('/movies', {
			method: "POST",
			body: JSON.stringify({ data_id: movie.id, title: movie.title, poster_path: movie.poster_path, overview: movie.overview, runtime: movie.runtime, tagline: movie.tagline, list_id: list }),
			headers: { 'Content-Type': 'application/json','Accept': 'application/json' }
		}).then(response => response.json())
		  .then(movie => dispatch({ type: 'UPDATE_LIST', payload: movie }));
	};
}

export function removeMovieFromList() {
	return (dispatch) => { dispatch({ type: 'REMOVE_MOVIE' }); }
}