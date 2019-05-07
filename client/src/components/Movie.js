import React from 'react';
import AddMovie from './AddMovie';


const Movie = (props) =>
	<div className="movie-front" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.movie_info.poster_path})` }} >
	<AddMovie onClick={props.onClick} movie_info={props.movie_info} movie_type={props.movie_type} current_list={props.current_list} />
	</div>;


export default Movie


