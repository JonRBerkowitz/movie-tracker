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

	render() {
	return(
		<div>
			<form>
				<input type="text" onChange={this.handleChange} value={this.state.query} />
				<input type="submit" />
			</form>
		</div>
	)
	}
}

export default SearchInput