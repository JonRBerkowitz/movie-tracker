import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import SearchContainer from './containers/SearchContainer';

class App extends React.Component {

  state = {
    text: "",
  }

  render() {
    return(
      <div>
      <h1>TEST</h1>

      <SearchContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { movies: state.search.movies }
}

export default connect (mapStateToProps)(App);

