export function fetchList() {
	let token = "Bearer " + localStorage.getItem("jwt")
		return (dispatch) => {
			dispatch({ type: 'LOADING_LIST' });
			return fetch('/lists', {
				method: "GET",
				headers: { 'Authorization': token }
			})
			.then(response => response.json())
			.then(lists => dispatch({ type: 'FETCH_LIST', payload: lists, current_list: lists[0] }));
		};
	}

export function switchList(list) {
	return (dispatch) => {
		dispatch({ type: 'SWITCH_LIST', payload: list})
	};
}


