import React from 'react'
import SearchInput from '../components/SearchInput';
import MoviesContainer from './MoviesContainer';
import fetchMovies from '../actions/SearchActions';
import { addMovieToList } from '../actions/MovieActions';
import { connect } from 'react-redux';

class SearchContainer extends React.Component {

componentDidMount() {
	this.props.clearMovie()
}

	render(){
	return(
		<div className="search-container">
			<SearchInput fetchMovies={this.props.fetchMovies} />
			<MoviesContainer style={"add-movie"} movieWrap={"search-results"} movies={this.props.movies} mutateMovie={this.props.addMovie} movie_type={"+"} list={this.props.list} />
		</div>
	)
	}
}

const mapStateToProps = state => {
	return { movies: state.search.movies, list: state.lists.current_list, movie: state.movie.movie }
}

const mapDispatchToProps = dispatch => {
	return { fetchMovies: (query) => dispatch( fetchMovies(query) ), addMovie: (movie, list) => dispatch( addMovieToList(movie, list)), clearMovie: () => dispatch({type: 'CLEAR'}) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)