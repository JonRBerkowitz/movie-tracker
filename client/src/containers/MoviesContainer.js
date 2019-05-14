import React from 'react';
import Movie from '../components/Movie';

class MoviesContainer extends React.Component {

	renderMovies = () => {
		if (!!this.props.movies) {
		return(this.props.movies.map(movie_info => 
			<Movie style={this.props.style} movie_info={movie_info} key={movie_info.id} onClick={this.props.mutateMovie} movie_type={this.props.movie_type} list={this.props.list} movie_id={movie_info.data_id || movie_info.id} />
		))
		}
	}

	render(){

	return(
		<div className={this.props.movieWrap}>
			{this.renderMovies()}
		</div>
	)
	}

}


export default MoviesContainer