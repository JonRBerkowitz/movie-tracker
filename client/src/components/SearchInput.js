import React from 'react';

class SearchInput extends React.Component {

	state = {
		query: ""
	}

	handleChange = (event) => {
		this.setState({
			query: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.fetchMovies(this.state.query)
		this.setState({ query: "" })
	}

	render() {
	return(
		<div>
			<form onSubmit={ (event) => this.handleSubmit(event) } >
				<input type="text" onChange={this.handleChange} value={this.state.query} />
				<input type="submit" />
			</form>
		</div>
	)
	}
}

export default SearchInput