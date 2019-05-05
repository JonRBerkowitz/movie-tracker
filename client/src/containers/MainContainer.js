import React from 'react';
import { connect } from 'react-redux';
import SearchContainer from './SearchContainer';
import ListContainer from './ListContainer';
import { fetchWatchedList } from '../actions/ListActions';

class MainContainer extends React.Component {

	state = {
		watched_movies: [],
		watched_movies_ids: []
	}

	componentDidMount() {
		this.props.fetchWatchedList()
	}

	render() {
	return(
	  <div className="wrapper">
    	<h1>Movie Tracker</h1>

    	<SearchContainer />
      	<ListContainer />
      </div>
	)
	}

}

const mapDispatchToProps = dispatch => {
	return { fetchWatchedList: () => dispatch( fetchWatchedList() ) }
}

export default connect(null, mapDispatchToProps)(MainContainer)