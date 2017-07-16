import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements'

import { strings } from '../../strings';

var t = require('tcomb-form-native');
var Form = t.form.Form;

var Service = t.struct({
  name: t.String, 
  type: t.String,             
  price: t.Number,           
  acceptCard: t.Boolean
});

var options = {};

class ServoiceForm extends Component {
  onSavePush(){
        this.props.navigator.pop();
  }

  onPress () {
    this.onSavePush();
    var value = this.refs.form.getValue();
    if (value) { 
      console.log(value);
    }
  }
  
  render() {
    return (
          <ScrollView>
            <View style={styles.container}>
                <Form
                ref="form"
                type={Service}
                options={options}
                />
                <Button
                    icon={{name: 'save'}}
                    backgroundColor='#03A9F4'               
                    buttonStyle={styles.button}
                    title={strings.save} 
                    onPress={() => { this.onPress()}}/>
            </View>
          </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 5,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  button: {
    borderRadius: 0, 
    marginLeft: 0, 
    marginRight: 0, 
    marginBottom: 0
  },
});

export default ServoiceForm;