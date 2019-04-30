export default function fetchMovies() {
		return (dispatch) => {
			dispatch({ type: 'LOADING_MOVIES' });
			return fetch('https://api.themoviedb.org/3/search/movie?api_key=a0290c76300b1f2e88f668e76490cd72&query=Home')
			.then(response => response.json())
			.then(movies => dispatch({ type: 'FETCH_MOVIES', payload: movies.results }));
		};
	}
