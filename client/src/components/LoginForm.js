import React from 'react';

class LoginForm extends React.Component {

	state = {
		username: "",
		password: ""
	}

	handleChange = (event) => {
		console.log(this.state)
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
	return(
		<React.Fragment>
			<h1>Login</h1>
			<form>
				<input type="text" name="username" onChange={(event) => this.handleChange(event)} value={this.state.username} /><br />
				<input type="password" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password} /><br />
				<input type="submit" />
			</form>
		</React.Fragment>
	)
	}
}

export default LoginForm