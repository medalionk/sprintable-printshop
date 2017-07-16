import React, {PropTypes, Component} from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';

import SignupForm from '../../components/Forms/SignupForm';
import Container from '../../components/Container';
import { Button } from '../../components/Button';
import { colors, fontSizes } from '../../config/styles'; 

/**
 * Signup View
 */
class SignupView extends Component {
  static displayName = 'SignupView';

  constructor(props) {
    super(props);
    this.state = {};
  };

  handleForgotPassword = () => {
    // TODO: Handle Forgot Password
  };

  handleLoginAuth = () => {
    // TODO: Handle Login Auth
  };

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <SignupForm/>
        <Container>
          <Button label='Log In' onPress={this.props.handleLoginAuth.bind(this)}/>
        </Container>
      </ScrollView>
    );
  }
}

SignupView.propTypes = {
  navigate: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: colors.green,
    padding: 30,
    flexDirection: 'column'
  },
});

export default SignupView;
