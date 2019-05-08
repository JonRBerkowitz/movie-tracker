import React from 'react';
import { connect } from 'react-redux';
import SearchContainer from './SearchContainer';
import ListContainer from './ListContainer';

class MainContainer extends React.Component {

	state = {
		watched_movies: [],
		watched_movies_ids: []
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

export default MainContainer