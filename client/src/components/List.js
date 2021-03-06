import React from 'react';
import MoviesContainer from '../containers/MoviesContainer';


const List = (props) => 

	<div className="list">
	<MoviesContainer style={props.style} movieWrap={"movie-list"} movies={props.list.movies} movie_type={"-"} mutateMovie={props.mutateMovie} list={props.list} />
	</div>;


export default List