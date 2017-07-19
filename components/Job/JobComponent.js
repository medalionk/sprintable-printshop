import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity  } from 'react-native';

import { strings } from '../../strings';////
import Container from '../../containers';
import ProfilePage from '../../containers/Profile/ClientViewContainer'

var {height, width} = Dimensions.get('window');

const viewClient = (navigator) => {
     navigator.push({title: 'Profile', Page: ProfilePage})
} 

const JobComponent = (props) => {
  return (
           <Container> 
              <View style={styles.profileImage}>
                    <TouchableOpacity onPress={() => viewClient(props.navigator)}>
                        <Image
                          source={{ uri: strings.profilePicLink}}
                          style={styles.thumbnail}
                        />
                      </TouchableOpacity>
                  </View>
                  <Text style={[styles.nameText, styles.centerText]}>h1 Heading</Text>
                  <Text style={[styles.priceText, styles.centerText]}>h2 Heading</Text>
                  <Text style={[styles.quantityText, styles.centerText]}>h3 Heading</Text>
                  <Text style={[styles.statusText, styles.centerText]}>h4 Heading</Text>
                  <Text style={[styles.descriptionText, styles.centerText]}>Normal Text</Text>
                  <Text style={[styles.descriptionText, styles.centerText]}>{props.id}</Text>
                  <View>
                    <Image source={{ uri: strings.imageLink}} style={styles.picture} />
                  </View>
           </Container>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    height: 50, 
    width: 50, 
    borderRadius: 25,
  },
  picture: {
    height: height * .3,
    width: width * .85,
    alignItems: 'center',
    marginTop: 10,
  },
  profileImage: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5, 
    marginBottom: 5
  },
  centerText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 22,
  },
  quantityText: {
    fontWeight: 'bold',
  },
  priceText: {
    color: 'green',
    fontStyle: 'italic',
  },
  statusText: {
    
  },
  descriptionText: {
    color: 'grey',
  },
});

export default JobComponent;