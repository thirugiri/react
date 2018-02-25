import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import About from './components/About';
import Writeblog from './components/Writeblog';

class App extends Component {
  render() {
    return (
      <Router>
      	<Switch>
      		<Route exact path='/' component={Landing} />
      		<Route exact path='/about' component={About} />
          <Route exact path='/writeblog' component={Writeblog} />
      	</Switch>
      </Router>
    );
  }
}



export default App;
