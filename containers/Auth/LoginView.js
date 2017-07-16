import React, {PropTypes, Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import LoginForm from '../../components/Forms/LoginForm';
import Container from '../../components/Container';
import { Button, TextButton } from '../../components/Button';
import { colors, fontSizes } from '../../config/styles'; 

/**
 * Login View
 */
class LoginView extends Component {
  static displayName = 'LoginView';

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.green,
        shadowColor: 'transparent',
        elevation: 0,
      },
      headerRight: (
        <TextButton 
          title='Forgot password?' 
          light
          onPress={() => params.handleForgotPassword()} />
      ),
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    this.props.navigation.setParams({ handleForgotPassword: this.forgotPassword });
  }

  forgotPassword = () => {
    this.props.navigate({routeName: 'ForgotPassword'})
  };

  handleLoginAuth = () => {
    // TODO: Handle Login Auth
    this.props.navigate({routeName: 'Home'})
  };

  render() {
    return (
      <View style={styles.container}>
        <LoginForm/>
        <Button 
          title='Log In'
          containerViewStyle={styles.buttonContainer}
          buttonStyle={styles.createAccountButton}
          textStyle={styles.createAccountText}
          onPress={this.handleLoginAuth}
        />
      </View>
    );
  }
};

LoginView.propTypes = {
  navigate: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    flex: 1,
    flexDirection: 'column'
  },
  buttonContainer: {
    margin: 15
  },
  createAccountButton: {
    backgroundColor: colors.white,
    borderRadius: 30
  },
  createAccountText: {
    fontSize: fontSizes.h4,
    fontWeight: 'bold',
    color: colors.green
  }
});

export default LoginView;
