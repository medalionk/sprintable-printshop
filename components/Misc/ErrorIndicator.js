import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import Container from '../../containers';

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
  
});

export default ErrorIndicator;