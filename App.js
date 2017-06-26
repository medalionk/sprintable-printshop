import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import Container from './container';

import OpenJobsPage from './pages/OpenJobs'
import App from './app/App.react';


export default class Home extends Component {
  render() {
    return (
       <App />
    );
  }
}

AppRegistry.registerComponent('Home', () => Home);