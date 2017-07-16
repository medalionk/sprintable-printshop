import React, { Component, PropTypes } from 'react';
import { View, StyleSheet  } from 'react-native';
import { Card, Button } from 'react-native-material-ui';
import ProfilePage from '../Profile/ClientViewContainer'
import JobComponent from '../../components/Job/JobComponent';

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
            <JobComponent job={{name:'Kura Mutum'}}/>
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
});

export default JobDetailsView;
