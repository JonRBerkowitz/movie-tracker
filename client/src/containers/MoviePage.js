import React from 'react';
import MovieInfo from '../components/MovieInfo'
import { fetchMovie } from '../actions/MovieActions';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';


class MoviePage extends React.Component {

	componentDidMount() {
		this.props.fetchMovie(this.props.match.params.movieId)
	}

	render(){
	return(
		<React.Fragment>
		<Navigation />
		<div className='wrapper'>
		<MovieInfo movie={this.props.movie}/>
		</div>
		</React.Fragment>
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