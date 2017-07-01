import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image  } from 'react-native';
import { Avatar, Card, ListItem, Toolbar, Button } from 'react-native-material-ui';
import ProfilePage from '../pages/profile'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  rowContainer: {
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 150,
        
    },
    button: {
        marginHorizontal: 30,
    },
});

var imageLink = "http://images.esellerpro.com/3522/I/204/5/1467388480-39965700.jpg";
var profilePicLink = "https://randomuser.me/api/portraits/men/97.jpg";

class DetailsContainer extends Component {
  constructor(props) {
        super(props);
    }

  viewClient(){
      this.props.navigator.push({title: 'Profile', Page: ProfilePage})
  }

  render() {
    return (
     <View style={styles.container}>
      <Card onPress={() => {
           this.viewClient()
        }}>
        <ListItem
          leftElement={<Avatar image={<Image 
            onPress={() => this.viewClient()} 
            source= {{ uri: profilePicLink}} 
            style={styles.thumbnail}/>} />}
          centerElement={{
              primaryText: 'John Buka',
              secondaryText: 'Job 2'}}
                />
          <View style={styles.photoContainer}>
              <Image source={{ uri: imageLink}} style={styles.picture} />
          </View>         
          <View style={styles.textContainer}>
            <Text>
              Losrem ipsumg dolgr ddsit ametfff, consectetur adipiscing elit,
              sed hdffo eissmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <View style={styles.rowContainer}>
                    <View style={styles.button}>
                        <Button raised primary text="Accept" icon="done" />
                    </View>
                    <View style={styles.button}>
                        <Button raised accent text="Reject" icon="clear" />
                    </View>
                </View>
          </View>               
      </Card>
    </View>
    );
  }
}

export default DetailsContainer;
