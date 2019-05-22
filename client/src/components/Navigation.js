import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navigation extends React.Component {

	state = {
		showLink: this.props.showLink
	}

	renderNewListLink = () => {
	if(window.location.href.indexOf('movie/') < 0) {
    	return <a className="logout" href="#" onClick={()=> this.props.modalOpen()}>New List</a>
  	} else {
  		return null
	}}

	render(){
	return(
		<React.Fragment>
		<div className="nav-bar">
			<span className="name"><Link to="/">MovieTracker</Link></span>
			<Link className="logout" to={'/login'} onClick={() => localStorage.clear()}>Log Out</Link>
			{this.renderNewListLink()}
		</div>
		</React.Fragment>
	)
	}

}

const mapStateToProps = state => {
	return { showLink: state.movie.movie }
}

export default connect(mapStateToProps)(Navigation)