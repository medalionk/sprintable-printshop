import React, { Component, PropTypes } from 'react';
import {View, StyleSheet, ScrollView  } from 'react-native';
import { Card } from 'react-native-elements'

import { Button } from 'react-native-material-ui';
import { strings } from '../../strings';
import Toolbar from '../../components/Toolbar/ToolbarBackComponent';
import JobComponent from '../../components/Job/JobComponent';
import Container from '../../containers';
import LoadingIndicator from '../../components/Misc/LoadingIndicator';
import ErrorIndicator from '../../components/Misc/ErrorIndicator';

class JobDetailsView extends Component {
  constructor(props) {
        super(props);
    }

  componentDidMount() {
        this.props.fetchJob(this.props.id);
  }

  acceptJob (id){
    this.props.acceptJob(id);
    this.props.navigator.pop()
  } 

  rejectJob (id){
    this.props.rejectJob(id);
    this.props.navigator.pop()
  } 

  render() {
    return (
        <View style={styles.container}>
          {
            this.props.isFetching && <LoadingIndicator/>
          }
          {
            this.props.error && <ErrorIndicator/>
          }
          {
            this.props.data.title ? (
               
              <ScrollView>
                <Card 
                    containerStyle={styles.card}
                    titleStyle={styles.titleText}
                    title={this.props.data.title}>
                    <JobComponent  data={this.props.data} navigator={this.props.navigator}/>
                    <View style={styles.rowContainer}>
                        <View style={styles.button}>
                            <Button raised primary text="Accept" icon="done" 
                                onPress={() => this.acceptJob(this.props.data.id)}/>
                        </View>
                        <View style={styles.button}>
                            <Button raised accent text="Reject" icon="clear" 
                                onPress={() => this.rejectJob(this.props.data.id)}/>
                        </View>
                    </View>
                </Card>  
              </ScrollView>
            )
            :null
          }
        </View>
    );
  }
}

const styles = StyleSheet.create({
    rowContainer: {
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
  },
  button: {
        marginHorizontal: 30,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  titleText: {
    //marginTop: 15, 
    //marginBottom: 15
  },
});

export default JobDetailsView;
