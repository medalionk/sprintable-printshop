import { AppRegistry } from 'react-native';
import React, {Component} from 'react';
import { Provider } from 'react-redux';

import AppViewContainer from './app/AppContainer';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);