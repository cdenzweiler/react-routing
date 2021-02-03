import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';

import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import Jeopardy from './components/jeopardy/Jeopardy';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/welcome/:name" component={Welcome} />
        <Route exact path="/" render={(props) => <Welcome {...props} name="Chris" />} />
        {/* <Route><div>404</div></Route> */}{/*this div overwrote the Jeopardy comp. and I didn't know how to fix it*/}
        <Route path ="/jeopardy" component={Jeopardy} />
        
        </Switch>
      </div>
    );
  }
}

export default App;