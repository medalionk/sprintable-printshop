import React, { Component, PropTypes } from 'react';
import {View, StyleSheet, ScrollView  } from 'react-native';
import { Card} from 'react-native-elements'

import {  Button } from 'react-native-material-ui';
import { strings } from '../../strings';
import Toolbar from '../../components/Toolbar/ToolbarBackComponent';
import JobComponent from '../../components/Job/JobComponent';
import Container from '../../containers';
import LoadingIndicator from '../../components/Misc/LoadingIndicator';
import ErrorIndicator from '../../components/Misc/ErrorIndicator';

class JobView extends Component {
  constructor(props) {
        super(props);
    }

  componentDidMount() {
        this.props.fetchJob(this.props.id);
  }
  
  closeJob (id){
    this.props.closeJob(id);
    this.props.navigator.pop()
  } 

  render() {
    return (
      <Container>
          <Toolbar route={{title: strings.progress}} navigator={this.props.navigator}/>
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
                        <Button raised primary text="Completed" icon="done" 
                          onPress={() => this.closeJob(this.props.data.id)}/>
                      </View>
                    </View>
                </Card>  
              </ScrollView>
            )
            :null
          }
      </Container>
     
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

export default JobView;
