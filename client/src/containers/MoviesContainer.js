import React from 'react';
import Movie from '../components/Movie';

class MoviesContainer extends React.Component {

	render(){

	return(
		<div className="search-results">
		{this.props.movies.map(movie_info => 
			<Movie movie_info={movie_info} onClick={this.props.mutateMovie} movie_type={this.props.movie_type} list={this.props.list} movie_id={movie_info.data_id || movie_info.id} />
		)}

		</div>
	)
	}

}


export default MoviesContainer