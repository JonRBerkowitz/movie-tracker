import React from 'react';
import Movie from '../components/Movie';
import { addMovieToList, removeMovieFromList } from '../actions/MovieActions';

import { connect } from 'react-redux';

class MoviesContainer extends React.Component {

	render(){
	return(
		<div className="search-results">
		{this.props.movies.map(movie_info => 
			<Movie movie_info={movie_info} onClick={this.props.addMovie} />
		)}
		</div>
	)
	}

}

const mapDispatchToProps = (dispatch) => {
	return { addMovie: () => dispatch( addMovieToList() ), removeMovie: () => dispatch( removeMovieFromList() ) }
}

export default connect(null, mapDispatchToProps)(MoviesContainer);