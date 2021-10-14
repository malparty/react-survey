import React, { Component } from 'react';
import './assets/stylesheets/application.scss';
import LoginScreen from './screens/Login';

export default class App extends Component {
  render() {
    return (
      <div className="application">
        <LoginScreen />
      </div>
    );
  }
}
