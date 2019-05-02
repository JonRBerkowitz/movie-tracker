import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import SearchContainer from './containers/SearchContainer';
import ListContainer from './containers/ListContainer'

class App extends React.Component {

  state = {
    text: "",
  }

  render() {
    return(
      <div className="wrapper">
      <h1>Movie Tracker</h1>

      <SearchContainer />
      <ListContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { movies: state.search.movies }
}

export default connect (mapStateToProps)(App);

