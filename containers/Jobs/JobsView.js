import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  Dimensions
} from 'react-native';

import { strings } from '../../strings';
import JobsListComponent from '../../components/Job/JobsListComponent';
import Toolbar from '../../components/Toolbar/ToolbarSearchableComponent';
import Container from '../../containers';
import TabView from '../Tab/TabViewContainer'

const height = Dimensions.get('window').height;

class JobsView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
        this.props.fetchJobs();
  }

  viewJob(id){
        this.props.navigator.push({ 
          Page: TabView, 
          props: { jobId:id }
        })
  }

  render() {
    return (
      <Container>
      <Toolbar route={{title: strings.jobs}} navigator={this.props.navigator}/>
        {
          this.props.isFetching && 
          <ActivityIndicator
            animating={true}
            style = {styles.activityIndicator}
            size="large"
            color="#00aa00"
          />
        }
        {
          this.props.error && <Text>Error!!!</Text>
        }
        {
          this.props.data ? (
            <JobsListComponent 
              data={this.props.data}
              onPressHandler={this.viewJob.bind(this)}
              navigator={this.props.navigator}/>
          )
          :null
        }
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: height * 0.8,
   },
});

export default JobsView;