import React, {PropTypes, Component} from 'react';

import {
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';

import { Button, SocialButton, TextButton } from '../../components/Button';
import Text from '../../components/Text';
import Container from '../../components/Container';
import { colors, fontSizes } from '../../config/styles';

/**
 * Auth View
 */
class AuthView extends Component {
  static displayName = 'AuthView';

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTintColor: colors.green,
      headerStyle: {
        backgroundColor: colors.green,
        shadowColor: 'transparent',
        elevation: 0,
      },
      headerRight: (
        <TextButton 
          title='Log In' 
          light
          onPress={() => params.handleLogin()} />
      ),
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    this.props.navigation.setParams({ handleLogin: this.login });
  }

  login = () => {
    this.props.navigate({routeName: 'Login'})
  };

  handleSignup = () => {
    this.props.navigate({routeName: 'Signup'})
  }

  handleFacebookAuth = () => {
    // TODO: Add fb Oauth login / signup
    this.props.navigate({routeName: 'Login'})
  };

  handleClose = () => {
    // TODO: Close app
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Container style={styles.introContainer}>
          <Text h2 style={styles.title}>
            Welcome to Sprintable.
          </Text>
        </Container>
        <Container>
          <SocialButton
            title='Continue with Facebook'
            button
            light
            type='facebook'
            raised={false}
            iconStyle={styles.authIcons}
            fontStyle={styles.fbButtonText}
            style={styles.fbButton}
            onPress={this.handleFacebookAuth}
          />
        </Container>
        <Container>
          <Button 
            title='Create Account'
            buttonStyle={styles.createAccountButton}
            textStyle={styles.createAccountText}
            onPress={this.handleSignup}
          />
        </Container>
      </ScrollView>
    );
  }
};

AuthView.propTypes = {
  navigate: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.green,
  },
  introContainer: {
    marginTop: 30,
    marginBottom: 30
  },
  title: {
    color: colors.clouds
  },
  fbButton: {
    margin: 0
  },
  fbButtonText: {
    color: colors.primary,
    fontSize: fontSizes.h4,
  },
  authIcons: {
    color: colors.primary,
  },
  createAccountButton: {
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 30,
  },
  createAccountText: {
    fontSize: fontSizes.h4,
    fontWeight: 'bold'
  }
});

export default AuthView;
