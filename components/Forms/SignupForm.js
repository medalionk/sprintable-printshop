import React, { Component } from 'react'; 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from '../Container';
import Button from '../Button';
import Label from '../Label';
import { colors, fontSizes } from '../../config/styles';

const SignupForm = (props) => {
    return (
        <ScrollView style={styles.scroll}>            
            <Container>
                <Text style={styles.heading}>Login</Text>
            </Container>
            <Container>
                <Label text="EMAIL ADDRESS" />
                <TextInput
                keyboardType='email-address'
                underlineColorAndroid='transparent'
                style={styles.textInput}
                />
            </Container>
            <Container>
                <Label text="PASSWORD" />
                <TextInput
                underlineColorAndroid='transparent'
                secureTextEntry={true}
                style={styles.textInput}
                />
            </Container>            
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    scroll: {
        marginBottom: 20,
    },
    heading: {
        color: colors.clouds,
        fontSize: fontSizes.h1,
        fontWeight: 'bold',
        marginBottom: 20
    },
    label: {
        color: colors.clouds,
        fontSize: fontSizes.h5
    },
    textInput: {
        height: 50,
        fontSize: fontSizes.h3,
        color: colors.white,
        borderWidth: 1,
        borderBottomColor: colors.clouds,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        marginBottom: 10,
    },
});
 
export default SignupForm;