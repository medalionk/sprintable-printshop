import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text  } from 'react-native';
import { Card, Button, ListItem } from 'react-native-material-ui';

import Toolbar from '../../components/Toolbar/ToolbarBackComponent';
import Container from '../../containers';
import { strings } from '../../strings';
import EditServiceView from './EditServiceViewContainer'

class ServiceDetailsView extends Component {
  constructor(props) {
        super(props);
    }

    onEditPush(){
        this.props.navigator.push({title: strings.editService, Page: EditServiceView, navigator:this.props.navigator})
    }

    render() {
      return (
          <Container>
            <Toolbar route={{title: strings.details}} navigator={this.props.navigator}/>
            <Card>
              <ListItem
                centerElement={{
                    primaryText: "Losrem ipsumg dolor",
                    secondaryText: "Losrem ipsumg dolor"}}
                      />        
                <View style={styles.textContainer}>
                  <Text>
                    Losrem ipsumg dolor sit amet, consectetur adipiscing elit,
                    sed hdffo eimod tempor incididunt ut labore et dolore magna aliqua.
                  </Text>
              </View> 
              <View style={styles.rowContainer}>
                      <View style={styles.button}>
                          <Button raised primary text="Edit" icon="edit" onPress={() => { this.onEditPush()}}/>
                      </View>
              </View>       
            </Card>
          </Container>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,  
    },
    button: { 
        marginHorizontal: 0,
    },
    textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
  },
});


export default ServiceDetailsView;