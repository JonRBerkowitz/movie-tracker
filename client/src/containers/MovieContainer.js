import React from 'react';
import Movie from '../components/Movie';

class MovieContainer extends React.Component {

	render(){
	return(
		<div className="search-results">
		{this.props.movies.map(movie_info => 
			<Movie movie_info={movie_info} />
		)}
		</div>
	)
	}

}

export default MovieContainer;