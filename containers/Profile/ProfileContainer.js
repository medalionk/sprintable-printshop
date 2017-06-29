import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Card, ListItem, Button, Tile, Rating } from 'react-native-elements'

import Container from '../../container';
import EditProfileContainer from '../Profile/EditProfileContainer'
import Toolbar from '../../components/ToolbarBack';
import { strings } from '../../strings';

const { height } = Dimensions.get('window');

class ProfileContainer extends Component {
  onEditPush(){
        this.props.navigator.push({
          title: strings.editProfile, 
          Page: EditProfileContainer, 
          navigator:this.props.navigator})
  }
  
  render() {
    return (
      <Container>
          <Toolbar route={{title: strings.profile}} navigator={this.props.navigator}/>
          <ScrollView>
            <Card 
              title='John Kato' 
              image={{uri: "https://randomuser.me/api/portraits/men/97.jpg"}} 
              imageStyle={styles.image}>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur
              </Text>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur
              </Text>
              <Text style={styles.text}>
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
                icon={{name: 'edit'}}
                backgroundColor='#03A9F4'               
                buttonStyle={styles.button}
                title={strings.editProfile} 
                onPress={() => { this.onEditPush()}}/>
            </Card>
          </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: height * .4,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    marginBottom: 10,
  },
  button: {
    borderRadius: 0, 
    marginLeft: 0, 
    marginRight: 0, 
    marginBottom: 0
  },
});

export default ProfileContainer;