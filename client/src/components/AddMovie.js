import React from 'react';

const AddMovie = (props) =>
<button className="add-movie" onClick={ () => props.onClick(props.movie_info, props.list.id) }>{props.movie_type}</button>;

export default AddMovie