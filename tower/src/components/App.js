import React, { Component } from 'react';

import Header from './Header'
import WineList from './WineList'

import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <WineList></WineList>
      </div>
    );
  }
}

export default App;
