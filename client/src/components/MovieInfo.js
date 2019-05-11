import React from 'react';
import { Link } from 'react-router-dom';

const MovieInfo = (props) =>
<React.Fragment>
	<div className="movie-cover" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${props.movie.backdrop_path})` }}><div className="overlay"><Link to="/" className="back-button">&lt;</Link></div></div>
<div className="movie-page">

	<div className="image-container">
		<img className="movie-poster" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.movie.poster_path}`} />
	</div>
	<div className="movie-info">
		<h1>{props.movie.title}</h1>
		<h3>Runtime: {props.movie.runtime} minutes</h3>
		<h2>{props.movie.tagline}</h2>
		<p className="overview">{props.movie.overview}</p>
		<p className="rating">Rating: {props.movie.vote_average}/10</p>
	</div>
</div>
</React.Fragment>;

export default MovieInfo