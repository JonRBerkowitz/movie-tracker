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
			<h1 className="login-page-title">MovieTracker</h1>
			<div className="login-box">
			<form onSubmit={(event) => this.handleSubmit(event)} >
				<p className="field-name">Email:</p>
				<input className="login-field" type="text" name="email" onChange={(event) => this.handleChange(event)} value={this.state.username} /><br />
				<p className="field-name">Password:</p>
				<input className="login-field" type="password" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password} /><br />
				<input className="submitForm" type="submit" />
			</form>
			</div>
		</React.Fragment>
	)
	}
}


const mapDispatchToProps = dispatch => {
	return { login: (email, password) => dispatch( login(email, password) )}
}

export default connect(null, mapDispatchToProps)(LoginForm)