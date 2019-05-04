import React from 'react';

const Movie = (props) => {
	return <div>
	<img className="movie-front" src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + props.movie_info.poster_path } onClick={props.onClick}/>
	</div>;
}

export default Movie