import React, { Component } from 'react'; 
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

import { FormLabel, FormInput } from 'react-native-elements'
import Container from '../Container';
import { Button } from '../../components/Button';
import Text from '../../components/Text';
import { colors, fontSizes } from '../../config/styles';

const LoginForm = (props) => {
    return (
        <View>            
            <Container>
                <Text h2 style={styles.title}>Login</Text>
            </Container>
            <Container>
                <FormLabel 
                    labelStyle={styles.label}>
                    EMAIL ADDRESS
                </FormLabel>
                <FormInput
                    keyboardType='email-address'
                    underlineColorAndroid='transparent'
                    textInputRef="email"
                    inputStyle={styles.textInput}
                />
            </Container>
            <Container>
                <FormLabel 
                    labelStyle={styles.label}>
                    PASSWORD
                </FormLabel>
                <FormInput
                    underlineColorAndroid='transparent'
                    textInputRef="password"
                    secureTextEntry={true}
                    inputStyle={styles.textInput}
                />
            </Container>            
        </View>
    );

};

const styles = StyleSheet.create({
    title: {
        color: colors.clouds,
        margin: 15
    },
    label: {
        color: colors.clouds,
    },
    textInput: {
        color: colors.white,
        borderWidth: 1,
        borderBottomColor: colors.clouds,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        marginBottom: 10,
    }
});
 
export default LoginForm;