import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Text
} from 'react-native';

import Container from '../../containers';

const height = Dimensions.get('window').height;

class ErrorIndicator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Text>Error!!!</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: height * 0.8,
   },
});

export default ErrorIndicator;