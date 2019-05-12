import React from 'react';
import SearchContainer from './SearchContainer';
import ListContainer from './ListContainer';
import Navigation from '../components/Navigation';


class MainContainer extends React.Component {

	state = {
		watched_movies: [],
		watched_movies_ids: []
	}

	render() {
	return(
	<React.Fragment>
	<Navigation />
	  <div className="wrapper">
    	<h1 className="app-name">MovieTracker</h1>

    	<SearchContainer />
      	<ListContainer />
      </div>
      </React.Fragment>
	)
	}

}

export default MainContainer