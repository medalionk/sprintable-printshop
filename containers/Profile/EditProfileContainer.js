import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, ScrollView, View, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements'

import Container from '../../containers';
import Toolbar from '../../components/Toolbar/ToolbarBackComponent';
import { strings } from '../../strings';

var t = require('tcomb-form-native');

const { height } = Dimensions.get('window');
var Form = t.form.Form;

var Person = t.struct({
  name: t.String, 
  address: t.String,             
  phoneNumber: t.Number,
  email: t.String,  
  socialMedia: t.maybe(t.String),           
  showPhoneNumber: t.Boolean
});

var options = {};

class EditProfileContainer extends Component {
  onSavePush(){
        this.props.navigator.pop();
  }
  onPress () {
    var value = this.refs.form.getValue();
    if (value) { 
      console.log(value);
    }
  }
  
  render() {
    return (
      <Container>
          <Toolbar route={{title: strings.profile}} navigator={this.props.navigator}/>
          <ScrollView>
            <View style={styles.container}>
                {/* display */}
                <Form
                ref="form"
                type={Person}
                options={options}
                />
                <Button
                    icon={{name: 'save'}}
                    backgroundColor='#03A9F4'               
                    buttonStyle={styles.button2}
                    title={strings.save} 
                    onPress={() => { this.onPress()}}/>
                
            </View>
          </ScrollView>
      </Container>
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
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  button2: {
    borderRadius: 0, 
    marginLeft: 0, 
    marginRight: 0, 
    marginBottom: 0
  },
});

export default EditProfileContainer;