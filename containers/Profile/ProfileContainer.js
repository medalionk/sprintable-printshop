import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Tile, Rating } from 'react-native-elements'

import Container from '../../container';
import Toolbar from '../../components/Toolbar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picture: {
    height: 120,
    width: 200,
    borderRadius: 0,
  },

  photoContainer: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

class Profile extends Component {
  render() {
    return (
      <Container>
          <Toolbar title='Profile' navigator={this.props.navigator}/>
          <Card 
              title='John Kato' 
              image={{uri: "https://randomuser.me/api/portraits/men/97.jpg"}} 
              imageStyle={styles.photoContainer}>
              <Text style={{marginBottom: 10}}>
                Lorem ipsum dolor sit amet, consectetur
              </Text>
              <Text style={{marginBottom: 10}}>
                Lorem ipsum dolor sit amet, consectetur
              </Text>
              <Text style={{marginBottom: 10}}>
                Lorem ipsum dolor sit amet, consectetur
              </Text>
              <Rating
                type="star"
                fractions={1}
                startingValue={3.6}
                imageSize={20}
                style={{ paddingVertical: 10 }}
              />
              <Button
                icon={{name: 'message'}}
                backgroundColor='#03A9F4'               
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Message' />
        </Card>
      </Container>
      
      //<Text>Profile!</Text>
    );
  }
}

export default Profile;