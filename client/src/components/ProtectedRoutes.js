import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import MoviePage from '../containers/MoviePage';


class ProtectedRoutes extends React.Component{
  render(){

  if(1 !== 1)
  return <Redirect to="/login" />

   return(
     <React.Fragment>
        <Route exact path="/" component={MainContainer} />
        <Route path={`/movies/:movieId`} component={MoviePage} />
     </React.Fragment>
   );
  }
}

export default ProtectedRoutes