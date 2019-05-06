import React from 'react';
import SearchInput from '../components/SearchInput';
import MoviesContainer from './MoviesContainer';
import fetchMovies from '../actions/SearchActions';
import { addMovieToList } from '../actions/MovieActions';
import { connect } from 'react-redux';

class SearchContainer extends React.Component {

	state = {
		type: "+"
	}

	render(){
	return(
		<div>
			<SearchInput fetchMovies={this.props.fetchMovies} />
			<MoviesContainer movies={this.props.movies} mutateMovie={this.props.addMovie} movie_type={this.state.type} />
		</div>
	)
	}
}

const mapStateToProps = state => {
	return { movies: state.search.movies }
}

const mapDispatchToProps = dispatch => {
	return { fetchMovies: (query) => dispatch( fetchMovies(query) ), addMovie: (movie) => dispatch( addMovieToList(movie)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)