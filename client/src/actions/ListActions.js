export default function fetchList() {
		return (dispatch) => {
			dispatch({ type: 'LOADING_LIST' });
			return fetch(`/lists/1`)
			.then(response => response.json())
			.then(list => dispatch({ type: 'FETCH_LIST', payload: list , movies: list.movies }));
		};
	}
