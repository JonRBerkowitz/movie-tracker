import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainContainer from './containers/MainContainer';
import LoginContainer from './containers/LoginContainer';

class App extends React.Component {

  render() {
    return(
      <Router>
      <React.Fragment>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/login" component={LoginContainer} />
      </React.Fragment>
      </Router>
    )
  }
}


export default App;