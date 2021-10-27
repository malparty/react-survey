import { Component } from 'react';
import './assets/stylesheets/application.scss';
import BackgroundImage from './components/BackgroundImage';
import LoginScreen from './screens/Login';

export default class App extends Component {
  render() {
    return (
      <div className="application">
        <BackgroundImage />
        <LoginScreen />
      </div>
    );
  }
}
