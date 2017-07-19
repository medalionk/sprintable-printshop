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
import JobProgressView from '../Jobs/JobProgressViewContainer'

class WIPView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
        this.props.fetchWIP();
  }

  jobProgress(id){
        this.props.navigator.push({
          Page: JobProgressView, 
          props: { id:id }})
  }

  render() {
    return (
      <Container>
        <Toolbar route={{title: strings.wip}} navigator={this.props.navigator}/>
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
                onPressHandler={this.jobProgress.bind(this)}
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
});


export default WIPView;
