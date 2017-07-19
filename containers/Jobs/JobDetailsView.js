import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image  } from 'react-native';
import { Card, Button, Avatar, ListItem } from 'react-native-material-ui';
import ProfilePage from '../Profile/ClientViewContainer'
import JobComponent from '../../components/Job/JobComponent';
import { strings } from '../../strings';

class JobDetailsView extends Component {
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
           <View>
            <ListItem
                    leftElement={<Avatar image={<Image 
                        onPress={() => this.viewClient()} 
                        source= {{ uri: strings.profilePicLink}} 
                        style={styles.thumbnail}/>} />}
                    centerElement={{
                        primaryText: 'Kura Mutum',
                        secondaryText: 'Job 2'}}
                            />
                    <View style={styles.photoContainer}>
                        <Image source={{ uri: strings.imageLink}} style={styles.picture} />
                    </View>         
                    <View style={styles.textContainer}>
                        <Text>
                        Losrem ipsumgdolgr ddsit ametfff, consectetur adipiscing elit,
                        sed hdffo eissmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                    </View>
            </View>
            <View style={styles.rowContainer}>
                    <View style={styles.button}>
                        <Button raised primary text="Accept" icon="done" />
                    </View>
                    <View style={styles.button}>
                        <Button raised accent text="Reject" icon="clear" />
                    </View>
            </View>       
          </Card>
        </View>
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
        marginTop: 150,
        
    },
    button: {
        marginHorizontal: 30,
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

export default JobDetailsView;
