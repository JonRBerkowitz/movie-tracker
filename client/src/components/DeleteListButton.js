import React from 'react';
import { connect } from 'react-redux';
import { deleteList } from '../actions/ListActions'


class DeleteListButton extends React.Component {

  state = {
  	show: [this.props.lists]
  }

  handleSubmit = () => {
  	this.props.deleteList(this.props.current_list)
  };

  renderButton = () => {
  	if (this.props.show === true) {
  		return <a className="logout delete" href="#" onClick={this.handleSubmit}>Delete List</a>
  	}
  }

	render(){

	return(
	<React.Fragment>
		{this.renderButton()}
	</React.Fragment>
	)
	}

}

const mapStateToProps = state => {
	return { current_list: state.lists.current_list, show: (state.lists.lists.length > 1 ? true : false) }
}

const mapDispatchToProps = dispatch => {
	return { deleteList: (list) => dispatch( deleteList(list) ) }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteListButton)