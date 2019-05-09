import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginContainer from './containers/LoginContainer';
import ProtectedRoutes from './components/ProtectedRoutes';

class App extends React.Component {

  render() {
    return(
      <Router>
      <React.Fragment>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route path="/" component={ProtectedRoutes} />
      </Switch>
      </React.Fragment>
      </Router>
    )
  }
}

export default App