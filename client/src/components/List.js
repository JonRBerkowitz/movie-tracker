import React from 'react';
import MoviesContainer from '../containers/MoviesContainer';


const List = (props) => 

	<div>
	<MoviesContainer movies={props.list.movies} movie_type={"-"} mutateMovie={props.mutateMovie} current_list={props.list} />
	</div>;


export default List