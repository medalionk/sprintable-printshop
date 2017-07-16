import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, ToastAndroid  } from 'react-native';
import { Card, ListItem} from 'react-native-material-ui';

class ServiceRowComponent extends Component {
  constructor(props) {
        super(props);
    }

  render() {
    return (
     <View style={styles.container}>
      <Card onPress={() => {
          this.props.onPress(this.props.data.job)
        }}>
            
        <ListItem
          centerElement={{
              primaryText: `${this.props.data.name.first} ${this.props.data.name.last}`,
              secondaryText: this.props.data.email}}
              rightElement="delete"
          onRightElementPress={() => {
                            ToastAndroid.show('Delete pressed', ToastAndroid.SHORT)
                        }}
                />  
               
          <View style={styles.textContainer}>
            <Text>
              Losrem ipsumg dolor sit amet, consectetur adipiscing elit,
              sed hdffo eimod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>               
      </Card>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
  },
});

export default ServiceRowComponent;
