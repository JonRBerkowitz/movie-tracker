import React from 'react';
import SearchInput from '../components/SearchInput'
import fetchMovies from '../actions/SearchActions'
import { connect } from 'react-redux';

class SearchContainer extends React.Component {

	componentDidMount() {
		this.props.fetchMovies()
	}

	render(){
	return(
		<div>
			<SearchInput />
			{this.props.movies.map( movie =>
				<li>{movie.original_title}</li>
			)}
		</div>
	)
	}
}

const mapStateToProps = state => {
	return { movies: state.search.movies }
}

const mapDispatchToProps = dispatch => {
	return { fetchMovies: () => dispatch( fetchMovies() ) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)

