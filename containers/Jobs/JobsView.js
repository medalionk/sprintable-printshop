import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import { strings } from '../../strings';
import { colors } from '../../styles';

import Toolbar from '../../components/Toolbar/ToolbarSearchableComponent';
import Row from '../../components/Row/JobRowComponent'
import Footer from '../../components/Footer/FooterComponent'
import Container from '../../containers';
import TabView from '../Tab/TabViewContainer'

const ds1 = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
});

class JobsView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
        this.props.fetchJobs();
    }

  viewJob(id){
        this.props.navigator.push({title: strings.details, Page: TabView, navigator:this.props.navigator})
  }

  render() {
    return (
      <Container>
      <Toolbar route={{title: strings.jobs}} navigator={this.props.navigator}/>
        {
          this.props.isFetching && 
          <ActivityIndicator
            animating={true}
            style={[styles.centering, {height: 80}]}
            size="large"
          />
        }
        {
          this.props.error && <Text>Error</Text>
        }
        {
          this.props.data.results ? (
            <View style={styles.container}>
                <ListView
                  style={styles.container}
                  dataSource={ds1.cloneWithRows(this.props.data.results)}
                  renderRow={(d) => <Row data={d} onPress={(id) => this.viewJob(id)} />}
                  renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                  renderFooter={() => <Footer />}
                  on
                />       
          </View>
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
  separator: {
    flex: 1,
    height: 5,
    backgroundColor: colors.transparent,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

export default JobsView;