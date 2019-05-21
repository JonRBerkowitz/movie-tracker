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


export function createList(name) {
	let token = "Bearer " + localStorage.getItem("jwt")
	return (dispatch) => { 
		dispatch({ type: 'CREATE_LIST' });
		return fetch('/lists', {
			method: "POST",
			body: JSON.stringify({ name: name , movies: []}),
			headers: { 'Content-Type': 'application/json','Accept': 'application/json', 'Authorization': token }
		}).then(response => response.json())
	  .then(list => {
	  	dispatch({ type: 'ADD_LIST', payload: list })});
	};
}

export function deleteList(list) {
	let token = "Bearer " + localStorage.getItem("jwt")
	return (dispatch) => { 
		dispatch({ type: 'DELETE_LIST' });
		return fetch(`/lists/${list.id}`, {
			method: "DELETE",
			body: JSON.stringify({ list: list }),
			headers: { 'Content-Type': 'application/json','Accept': 'application/json', 'Authorization': token }
		}).then(response => response.json())
		  .then(res => dispatch({ type: 'REMOVE_LIST', payload: res }));
	};
}