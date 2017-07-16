import React, { Component } from 'react'; 
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';

import { FormLabel, FormInput, Button } from 'react-native-elements'
import Container from '../Container';
import { colors, fontSizes } from '../../config/styles';

const OrderForm = (props) => {
    // const onTextChange = (event) => props.handleTextChange();
    // const onSelectedValue = (value) => props.handleSelectedValue(value);
    // const onValueChange = (itemValue, itemIndex) => props.handleValueChange(itemValue);
    
    return (
      <Container>
        <FormLabel>Shipping Address</FormLabel>
        <FormInput
            textInputRef='shippingAddress'/>
        <Button
          onPress={() => console.log('yo')}
          icon={{ name: 'done' }}
          buttonStyle={{ marginTop: 15 }}
          title="SUBMIT"
        />
      </Container>
    );

};

OrderForm.propTypes = {
  handleTextChange: React.PropTypes.func.isRequired,
  handleSelectedValue: React.PropTypes.func.isRequired,
  handleValueChange: React.PropTypes.func.isRequired
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
 
export default OrderForm;