import React from 'react';
import AddMovie from './AddMovie';
import { Link, Route } from 'react-router-dom';

const Movie = (props) =>
	<div className="movie-shell">
	<div className="movie-front" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.movie_info.poster_path})` }} >
	<AddMovie style={props.style} onClick={props.onClick} movie_info={props.movie_info} movie_type={props.movie_type} list={props.list} />
	<Link className="movie-link" key={props.movie_info.id} to={`/movies/${props.movie_id}`}>{props.movie_info.title.substring(0,20)}</Link>

	</div>
	</div>;



export default Movie


