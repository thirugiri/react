import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import About from './components/About';
import Writeblog from './components/Writeblog';
import Viewpost from './components/Viewpost';
import Blog from './components/Blog';
import Deleteblog from './components/Deleteblog';
import Editblog from './components/Editblog'

class App extends Component {
  render() {
    return (
      <Router>
      	<Switch>
      		<Route exact path='/' component={Landing} />
      		<Route exact path='/about' component={About} />
          <Route exact path='/writeblog' component={Writeblog} />
          <Route exact path='/myposts' component={Viewpost} />
          <Route exact path="/view/:id" component={Blog} />
          <Route exact path="/delete/:id" component={Deleteblog} />
          <Route exact path="/edit/:id" component={Editblog} />
      	</Switch>
      </Router>
    );
  }
}



export default App;
