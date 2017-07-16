import React, { Component, PropTypes } from 'react';
import { View, StyleSheet  } from 'react-native';
import { Card, Button } from 'react-native-material-ui';
import { strings } from '../../strings';
import ProfilePage from '../Profile/ClientViewContainer'
import Toolbar from '../../components/Toolbar/ToolbarBackComponent';
import JobComponent from '../../components/Job/JobComponent';
import Container from '../../containers';

class JobView extends Component {
  constructor(props) {
        super(props);
    }

  viewClient(){
      this.props.navigator.push({title: 'Profile', Page: ProfilePage})
  }

  render() {
    return (
      <Container>
        <Toolbar route={{title: strings.progress}} navigator={this.props.navigator}/>
        <View style={styles.container}>
          <Card onPress={() => {
              this.viewClient()
            }}>
            <JobComponent job={{name:'Kura Mutum'}}/>
            <View style={styles.rowContainer}>
                <View style={styles.button}>
                    <Button raised primary text="Completed" icon="done" />
                  </View>
            </View>       
          </Card>
        </View>
      </Container>
     
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

export default JobView;
