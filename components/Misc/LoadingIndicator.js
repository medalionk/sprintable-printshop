import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Dimensions
} from 'react-native';

import Container from '../../containers';

const height = Dimensions.get('window').height;

class LoadingIndicator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <ActivityIndicator
              animating={true}
              style = {styles.activityIndicator}
              size="large"
              color="#00aa00"
            />
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

export default LoadingIndicator;