import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './components/App';
import About from './components/About'
import WineList from './components/WineList'
import OneWine from './components/OneWine'

ReactDOM.render(
  <Router>
    <div>
      <Route path='/' component={App}/>
      <Route exact path='/' component={About}/>
      <Route exact path='/wines' component={WineList}/>
      <Route path='/wines/:id' component={OneWine}/>
    </div>
  </Router>
  , document.getElementById('root'));
