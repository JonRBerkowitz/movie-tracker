import React from 'react';

const AddMovie = (props) =>
<button className="add-movie" onClick={ () => props.onClick(props.movie_info) }>+</button>;

export default AddMovie