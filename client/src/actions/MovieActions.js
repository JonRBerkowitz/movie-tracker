export function addMovieToList(movie, list) {
	let token = "Bearer " + localStorage.getItem("jwt")
	return (dispatch) => { 
		dispatch({ type: 'ADD_MOVIE' });
		return fetch('/movies', {
			method: "POST",
			body: JSON.stringify({ data_id: movie.id, title: movie.title, poster_path: movie.poster_path, overview: movie.overview, runtime: movie.runtime, tagline: movie.tagline, list_id: list }),
			headers: { 'Content-Type': 'application/json','Accept': 'application/json', 'Authorization': token }
		}).then(response => response.json())
		  .then(movie => dispatch({ type: 'UPDATE_LIST', payload: movie }));
	};
}

export function removeMovieFromList(movie, list) {
	let token = "Bearer " + localStorage.getItem("jwt")
	return (dispatch) => { dispatch({ type: 'REMOVE_MOVIE' }); 
	return fetch(`/lists/${list}`, {
		method: "PUT",
		body: JSON.stringify({ movie_id: movie.id, list_id: list }),
		headers: { 'Content-Type': 'application/json','Accept': 'application/json', 'Authorization': token }
	}).then(response => response.json())
	  .then(movie => dispatch({ type: 'REMOVE_MOVIE_FROM_LIST', payload: movie }))
	};
}

export function fetchMovie(movie) {
	return (dispatch) => { dispatch({ type: 'LOADING_MOVIE' });
		return fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=a0290c76300b1f2e88f668e76490cd72`)
		.then(response => response.json())
		.then(movie => dispatch({ type: 'FETCH_MOVIE', payload: movie }));
	};
}