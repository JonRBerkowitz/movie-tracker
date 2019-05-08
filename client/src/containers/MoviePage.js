import React from 'react';
import MovieInfo from '../components/MovieInfo'
import { fetchMovie } from '../actions/MovieActions';
import { connect } from 'react-redux';

class MoviePage extends React.Component {

	componentDidMount() {
		this.props.fetchMovie(this.props.match.params.movieId)
	}

	render(){
	return(
		<div className='wrapper'>
		<MovieInfo movie={this.props.movie}/>
		</div>
	)
	}

}

const mapStateToProps = state => {
	return { movie: state.movie.movie }
}

const mapDispatchToProps = dispatch => {
	return { fetchMovie: (movie) => dispatch( fetchMovie(movie)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)