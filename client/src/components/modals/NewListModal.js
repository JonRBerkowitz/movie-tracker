import React from 'react';
import { createList } from '../../actions/ListActions';
import { switchList } from '../../actions/ListActions'
import { connect } from 'react-redux';

class NewListModal extends React.Component {

	state = {
		input: ""
	}

	handleInput = (event) => {
		this.setState({ input: event.target.value })
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.createList(this.state.input)
		this.setState({ input: "" })
    this.props.modalClose()
    this.props.switchList(this.props.lists[(this.props.lists.length - 1)])
	}

	render() {

    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop" >
        <div className="modal" >
          {this.props.children}
          <button className="modal-x" onClick={this.props.modalClose}>
              X
          </button>
          <h1>Create New List</h1>
          <form onSubmit ={(event) => this.handleSubmit(event)} >
          <input className="modal-input" type="text" placeholder="Enter new list name..." onChange={event => this.handleInput(event)} />
          <input className="submitForm modal-submit" type="submit" />
          </form>
          <div className="footer">

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { lists: state.lists.lists }
}

const mapDispatchToProps = dispatch => {
	return { createList: (input) => dispatch( createList(input) ), switchList: (list) => dispatch( switchList(list)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewListModal)