import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image  } from 'react-native';
import { Card, ListItem} from 'react-native-material-ui';

class RowComponent extends Component {
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
          leftElement={<Image source= {{ 
            uri: this.props.data.picture.thumbnail}} 
            style={styles.thumbnail}/>}
          centerElement={{
              primaryText: `${this.props.data.name.first} ${this.props.data.name.last}`,
              secondaryText: this.props.data.email}}
                />
          <View>
              <Image source={{ uri: this.props.data.picture.large}} style={styles.picture} />
          </View>         
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
  thumbnail: {
    height: 40,
    borderRadius: 20,
    width: 40
  },
  picture: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default RowComponent;
