import React from 'react';
import MovieContainer from '../containers/MovieContainer';


const List = (props) => 
	<div>
	<h1>{props.list_data.name}</h1>
	<MovieContainer movies={props.movie_data} />
	</div>;


export default List