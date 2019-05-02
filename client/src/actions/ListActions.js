export default function fetchList(query) {
		return (dispatch) => {
			dispatch({ type: 'LOADING_LIST' });
			return fetch(`/lists`)
			.then(response => response.json())
			.then(movies => dispatch({ type: 'FETCH_LIST', payload: movies }));
		};
	}
