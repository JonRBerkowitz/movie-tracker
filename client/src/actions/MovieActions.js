export function addMovieToList(movie) {
	console.log(movie.title)
	return (dispatch) => { 
		dispatch({ type: 'ADD_MOVIE' });
		return fetch('/movies', {
			method: "POST",
			body: JSON.stringify({ data_id: movie.id, title: movie.title, poster_path: movie.poster_path, overview: movie.overview, runtime: movie.runtime, tagline: movie.tagline }),
			headers: { 'Content-Type': 'application/json','Accept': 'application/json' }
		}).then(function(response) {
		console.log(response.json());

		})
	};
}

export function removeMovieFromList() {
	return (dispatch) => { dispatch({ type: 'REMOVE_MOVIE' }); }
}