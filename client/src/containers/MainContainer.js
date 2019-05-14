import React from 'react';
import SearchContainer from './SearchContainer';
import ListContainer from './ListContainer';
import Navigation from '../components/Navigation';
import NewListModal from '../components/modals/NewListModal';

class MainContainer extends React.Component {

	state = {
		watched_movies: [],
		watched_movies_ids: [],
		isOpen: false
	}

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleModalOpen = () => {
  	this.setState({ isOpen: true })
  }

  handleModalClose = () => {
  	this.setState({ isOpen: false })
  }

	render() {
	return(
	<React.Fragment>
	<Navigation modalOpen={this.handleModalOpen}/>
	  <div className="wrapper">
	  	<NewListModal show={this.state.isOpen} modalClose={this.handleModalClose} />
    	<SearchContainer />
      	<ListContainer />
      </div>
      </React.Fragment>
	)
	}

}

export default MainContainer