import React from 'react';

class MoviePage extends React.Component {

	render(){
	return(
		<div className='wrapper'>
			<h1>MoviePage</h1>
        <h2>{this.props.match.params.movieId}</h2>
		</div>
	)
	}

}

export default MoviePage;