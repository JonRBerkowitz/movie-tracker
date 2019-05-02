import React from 'react';
import MovieContainer from '../containers/MovieContainer';


const List = (props) => {
	return <div>
	{props.testy}
	{props.list.name}
	{props.list.id}
			<MovieContainer movies={props.list.movies} />
	</div>;
}

export default List