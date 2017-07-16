import React from 'react';
import { View, Text, StyleSheet, Image  } from 'react-native';
import { Avatar, ListItem } from 'react-native-material-ui';
import { strings } from '../../strings';

const JobComponent = (props) => {
  return (
    <View>
      <ListItem
              leftElement={<Avatar image={<Image 
                onPress={() => this.viewClient()} 
                source= {{ uri: strings.profilePicLink}} 
                style={styles.thumbnail}/>} />}
              centerElement={{
                  primaryText: props.job.name,
                  secondaryText: 'Job 2'}}
                    />
              <View style={styles.photoContainer}>
                  <Image source={{ uri: strings.imageLink}} style={styles.picture} />
              </View>         
              <View style={styles.textContainer}>
                <Text>
                  Losrem ipsumg dolgr ddsit ametfff, consectetur adipiscing elit,
                  sed hdffo eissmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
      </View>
  );
}

const styles = StyleSheet.create({
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

export default JobComponent;