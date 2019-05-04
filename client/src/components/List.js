import React from 'react';
import MoviesContainer from '../containers/MoviesContainer';


const List = (props) => 
	<div>
	<h1>{props.list_data.name}</h1>
	<MoviesContainer movies={props.movie_data} />
	</div>;


export default List