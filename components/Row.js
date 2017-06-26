import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image  } from 'react-native';
import { Avatar, Card, ListItem, Toolbar } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:10,
  },
  textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
  },
  thumbnail: {
    height: 40,
    width: 30,
    borderRadius: 80,
  },
  picture: {
    height: 120,
    width: 150,
    borderRadius: 0,
  },

  photoContainer: {
    flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
  },
});

var profilePicLink = "https://randomuser.me/api/portraits/men/97.jpg";

class Row extends Component {
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
          leftElement={<Avatar image={<Image source= {{ uri: profilePicLink}} style={styles.thumbnail}/>} />}
          //leftElement={<Image source={{ uri: profilePicLink}} style={styles.thumbnail} />}
          centerElement={{
              primaryText: 'John Buka',
              secondaryText: this.props.data.job}}
                />
          <View style={styles.photoContainer}>
              <Image source={{ uri: this.props.data.picture.large}} style={styles.picture} />
          </View>         
          <View style={styles.textContainer}>
            <Text>
              Losrem ipsumg dolor sit amet, consectetur adipiscing elit,
              sed hdffo eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>               
      </Card>
    </View>
    );
  }
}

export default Row;
