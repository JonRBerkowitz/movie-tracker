import React from 'react';
import SearchInput from '../components/SearchInput';
import MoviesContainer from './MoviesContainer';
import fetchMovies from '../actions/SearchActions';
import { addMovieToList } from '../actions/MovieActions';
import { connect } from 'react-redux';

class SearchContainer extends React.Component {

	render(){
	return(
		<div>
			<SearchInput fetchMovies={this.props.fetchMovies} />
			<MoviesContainer movies={this.props.movies} mutateMovie={this.props.addMovie} movie_type={"+"} list={this.props.list} />
		</div>
	)
	}
}

const mapStateToProps = state => {
	return { movies: state.search.movies, list: state.lists.current_list.id }
}

const mapDispatchToProps = dispatch => {
	return { fetchMovies: (query) => dispatch( fetchMovies(query) ), addMovie: (movie, list) => dispatch( addMovieToList(movie, list)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)