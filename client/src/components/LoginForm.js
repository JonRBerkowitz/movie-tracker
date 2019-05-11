import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/UserActions';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {

	state = {
		email: "",
		password: "",
		logged_in: false
	}


	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.login(this.state.email, this.state.password)
		.then( () => this.setState({ email: "", password: "", logged_in: true }))
	}

	render() {

	if (this.state.logged_in === true) {
		return <Redirect to="/" />
	}

	if(localStorage.getItem('jwt') !== null)
	return <Redirect to="/" />

	return(
		<React.Fragment>
			<h1>Login</h1>
			<form onSubmit={(event) => this.handleSubmit(event)} >
				<input type="text" name="email" onChange={(event) => this.handleChange(event)} value={this.state.username} /><br />
				<input type="password" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password} /><br />
				<input type="submit" />
			</form>
		</React.Fragment>
	)
	}
}


const mapDispatchToProps = dispatch => {
	return { login: (email, password) => dispatch( login(email, password) )}
}

export default connect(null, mapDispatchToProps)(LoginForm)