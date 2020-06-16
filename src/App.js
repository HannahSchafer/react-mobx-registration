import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';

import SignUp from './routes/signup/signup.js';
import Login from './routes/login/login.js';
import AuthStore from './stores/auth.js';
import './App.css';


const authStore = new AuthStore();

class App extends Component {
  render() {
    return (
      <div className="app__container">
        <div className="ui container">
          <img src="/static/logo1.png" alt="Care Icon" className="app__logo" />
          <div className="app__title">Organization</div>
          <Provider store={ authStore }>
              <Router>
                <Switch>
                  <Route exact path='/' component={SignUp} />
                  <Route path='/login' component={Login} />
                  <Redirect from='*' to='/' />
                </Switch>
              </Router>
          </Provider>
        </div>
      </div>
    );
  }
}

export default (observer(App));
