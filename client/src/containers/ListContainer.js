import React from 'react';
import List from '../components/List';
import MovieContainer from './MovieContainer'
import fetchList from '../actions/ListActions'
import { connect } from 'react-redux';

class ListContainer extends React.Component {

	componentDidMount() {
		this.props.fetchList()
	}

	render(){
		console.log(this.props.list)
		console.log(this.props.movies)
	return(
		<div>
			<hr />
			<h4>List Picker</h4>
			<List movie_data={this.props.movies} list_data={this.props.list} />
		</div>
	)
	}
}

const mapStateToProps = (state) => {
	return { list: state.lists.list_data, movies: state.lists.movies }
}

const mapDispatchToProps = dispatch => {
	return { fetchList: () => dispatch( fetchList() ) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)