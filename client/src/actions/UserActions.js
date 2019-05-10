export function login(email, password) {
	return (dispatch) => { 
		dispatch({ type: 'LOGIN' });
		console.log(email, password)
		return fetch('/user_token', {
			method: "POST",
			body: JSON.stringify({ 'auth': {'email': email, 'password': password } }),
			headers: { 'Content-Type': 'application/json','Accept': 'application/json' }
		}).then(response => response.json())
		  .then(result => localStorage.setItem('jwt', result.jwt))
	};
}