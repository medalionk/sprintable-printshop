import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class DummyView extends Component {
  render() {
    return (
        <View style={{ backgroundColor: '#673ab7', flex:1 }} ><Text>Dummy View!!!</Text></View>
    );
  }
}

export default DummyView;