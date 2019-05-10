import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/UserActions';

class LoginForm extends React.Component {

	state = {
		email: "",
		password: ""
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.login(this.state.email, this.state.password)
		this.setState({ email: "", password: ""})
	}

	render() {
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