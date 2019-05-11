import React from 'react';
import List from '../components/List';
import ListSelector from '../components/ListSelector';
import { fetchList } from '../actions/ListActions'
import { removeMovieFromList } from '../actions/MovieActions';
import { connect } from 'react-redux';

class ListContainer extends React.Component {

	state = {
		current_list_id: 0
	}

	componentDidMount() {
		this.props.fetchList()
	}

	renderList = () => {
		if (this.props.lists.length > 0) {
			return <React.Fragment><ListSelector lists={this.props.lists} /><List list={this.props.current_list} mutateMovie={this.props.removeMovie} style={"remove-movie"}/></React.Fragment>
		}
	}

	onChange = (event) => {
		this.setCurrentListId()
	}

	setCurrentListId = () => {
		this.setState({ current_list_id: this.props.lists[this.state.current_list_index].id} )
	}

	render(){
	return(
		<div className="list-container">
			{this.renderList()}
		</div>
	)
	}
}

const mapStateToProps = (state) => {
	return { lists: state.lists.lists, current_list: state.lists.current_list }
}

const mapDispatchToProps = dispatch => {
	return { fetchList: () => dispatch( fetchList()), removeMovie: (movie, list) => dispatch( removeMovieFromList(movie, list)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)