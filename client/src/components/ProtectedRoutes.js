import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import MoviePage from '../containers/MoviePage';


class ProtectedRoutes extends React.Component{
  render(){

  if(localStorage.getItem('jwt') === null)
  return <Redirect to="/login" />

   return(
     <React.Fragment>
     <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path={`/movies/:movieId`} component={MoviePage} />
        <Route component={MainContainer} />
      </Switch>
     </React.Fragment>
   );
  }
}

export default ProtectedRoutes