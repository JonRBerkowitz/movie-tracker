import React from 'react';
import List from '../components/List';
import MovieContainer from './MovieContainer'
import fetchList from '../actions/ListActions'
import { connect } from 'react-redux';

class ListContainer extends React.Component {

	componentDidMount() {
		this.props.fetchLists()
	}

	render(){
	return(
		<div>
			<hr />
			<h4>List Picker</h4>
			{this.props.lists.map(list => <List list={list} testy="WHY" /> )}
		</div>
	)
	}
}

const mapStateToProps = (state) => {
	return { lists: state.lists.lists }
}

const mapDispatchToProps = dispatch => {
	return { fetchLists: () => dispatch( fetchList() ) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)