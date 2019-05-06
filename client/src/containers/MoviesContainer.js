import React from 'react';
import Movie from '../components/Movie';

import { connect } from 'react-redux';

class MoviesContainer extends React.Component {

	render(){

	return(
		<div className="search-results">
		{this.props.movies.map(movie_info => 
			<Movie movie_info={movie_info} onClick={this.props.mutateMovie} movie_type={this.props.movie_type} />
		)}
		</div>
	)
	}

}


export default MoviesContainer;