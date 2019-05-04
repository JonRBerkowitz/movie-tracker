import React from 'react';
import SearchInput from '../components/SearchInput';
import MoviesContainer from './MoviesContainer';
import fetchMovies from '../actions/SearchActions';
import { connect } from 'react-redux';

class SearchContainer extends React.Component {

	render(){
	return(
		<div>
			<SearchInput fetchMovies={this.props.fetchMovies} />
			<MoviesContainer movies={this.props.movies} />
		</div>
	)
	}
}

const mapStateToProps = state => {
	return { movies: state.search.movies }
}

const mapDispatchToProps = dispatch => {
	return { fetchMovies: (query) => dispatch( fetchMovies(query) ) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)