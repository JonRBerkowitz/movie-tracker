import React from 'react';
import List from '../components/List';
import ListSelector from '../components/ListSelector';
import NewListModal from '../components/modals/NewListModal';
import { fetchList } from '../actions/ListActions'
import { removeMovieFromList } from '../actions/MovieActions';
import { connect } from 'react-redux';

class ListContainer extends React.Component {

	state = {
		current_list_id: 0,
		isOpen: false
	}

	componentDidMount() {
		this.props.fetchList()
	}

	renderList = () => {
		if (this.props.lists.length > 0) {
			return <React.Fragment><ListSelector current_list={this.props.current_list} lists={this.props.lists} /><List list={this.props.current_list} mutateMovie={this.props.removeMovie} style={"remove-movie"}/></React.Fragment>
		}
	}

	onChange = (event) => {
		this.setCurrentListId()
	}

	setCurrentListId = () => {
		this.setState({ current_list_id: this.props.lists[this.state.current_list_index].id} )
	}

	toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

	render(){
	return(
		<React.Fragment>
		<div className="list-container">
			{this.renderList()}
		</div>
      </React.Fragment>
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