import React from 'react';
import { switchList } from '../actions/ListActions'
import { connect } from 'react-redux';

class ListSelector extends React.Component {

state = {
	current_list: [this.props.current_list]
}

componentDidMount() {
	this.props.switchList(this.props.current_list || this.props.lists[0])
}

handleChange = (event) => {
	this.setState({ current_list: this.props.lists[event.target.value] })
	this.props.switchList(this.props.lists[event.target.value])
}

render(){
return(
	<select className="list-select" onChange={event => this.handleChange(event)}>
		{this.props.lists.map((list, index) => 
		<option value={index} key={list.id}>{list.name}</option>
		)}
	</select>
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