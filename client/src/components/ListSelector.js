import React from 'react';
import { switchList } from '../actions/ListActions'
import { connect } from 'react-redux';

class ListSelector extends React.Component {

state = {
	current_list: [this.props.lists[0]],
	selected_value: ''
}

componentDidMount() {
	this.props.switchList(this.props.current_list)
	this.setState({ selected_value: this.props.lists.indexOf(this.props.current_list) })
}

handleChange = (event) => {
	this.setState({selected_value: event.target.value })
	this.props.switchList(this.props.lists[event.target.value])
}

componentDidUpdate(prevProps) {
  if (this.props.lists.length !== prevProps.lists.length) {
	this.props.switchList(this.props.current_list)
	this.setState({ selected_value: (this.props.lists.length - 1) })
}
	console.log(this.state.selected_value)
	console.log(this.props.current_list)
}


render(){
return(
	<div>
	<select className="list-select" onChange={event => this.handleChange(event)} value={this.state.selected_value}>
		{this.props.lists.map((list, index) => 
		<option value={index} key={list.id}>{list.name}</option>
		)}
	</select>
	</div>
	)
	}
}

const mapStateToProps = state => {
	return { current_list: state.lists.current_list }
}

const mapDispatchToProps = dispatch => {
	return { switchList: (list) => dispatch( switchList(list)) }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListSelector)