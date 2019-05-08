import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainContainer from './containers/MainContainer';
import LoginContainer from './containers/LoginContainer';
import MoviePage from './containers/MoviePage'

class App extends React.Component {

  render() {
    return(
      <Router>
      <React.Fragment>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route path={`/movies/:movieId`} component={MoviePage} />
      </React.Fragment>
      </Router>
    )
  }
}

export default App