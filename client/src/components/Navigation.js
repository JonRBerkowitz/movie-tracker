import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

	render(){
	return(
		<React.Fragment>
			<Link className="logout" to={'/login'} onClick={() => localStorage.clear()}>Log Out</Link>
		</React.Fragment>
	)
	}

}

export default Navigation