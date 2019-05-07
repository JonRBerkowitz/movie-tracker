import React from 'react';
import MoviesContainer from '../containers/MoviesContainer';


const List = (props) => 

	<div>
	<h3>{props.list.name}</h3>
	<MoviesContainer movies={props.list.movies} movie_type={"-"}/>
	</div>;


export default List