import React from 'react';
import List from '../components/List';
import { fetchList } from '../actions/ListActions'
import { removeMovieFromList } from '../actions/MovieActions';
import { connect } from 'react-redux';

class ListContainer extends React.Component {

	state = {
		type: "-"
	}

	componentDidMount() {
		this.props.fetchList()
	}

	render(){
	return(
		<div>
			<hr />
			<List movie_data={this.props.movies} list_data={this.props.list} mutateMovie={this.props.removeMovie} movie_type={this.state.type} />
		</div>
	)
	}
}

const mapStateToProps = (state) => {
	return { list: state.lists.list_data, movies: state.lists.movies }
}

const mapDispatchToProps = dispatch => {
	return { fetchList: () => dispatch( fetchList()), removeMovie: (movie) => dispatch( removeMovieFromList(movie)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)