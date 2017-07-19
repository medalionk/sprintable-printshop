import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { strings } from '../../strings';
import JobsListComponent from '../../components/Job/JobsListComponent';
import LoadingIndicator from '../../components/Misc/LoadingIndicator';
import ErrorIndicator from '../../components/Misc/ErrorIndicator';
import Toolbar from '../../components/Toolbar/ToolbarSearchableComponent';
import Container from '../../containers';
import TabView from '../Tab/TabViewContainer'

class JobsView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
        this.props.fetchJobs();
  }

  viewJobDetails(id){
        this.props.navigator.push({ 
          Page: TabView, 
          props: { id:id }
        })
  }

  render() {
    return (
      <Container>
      <Toolbar route={{title: strings.jobs}} navigator={this.props.navigator}/>
        {
          this.props.isFetching && <LoadingIndicator/>
        }
        {
          this.props.error && <ErrorIndicator/>
        }
        {
          this.props.data ? (
            <JobsListComponent 
              data={this.props.data}
              onPressHandler={this.viewJobDetails.bind(this)}
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
  }
});

export default JobsView;