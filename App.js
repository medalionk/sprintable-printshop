import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import App from './app/App.react';

export default class Home extends Component {
  render() {
    return (
       <App />
    );
  }
}

AppRegistry.registerComponent('Home', () => Home);