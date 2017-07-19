import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  View,
  Text,
  ActivityIndicator,
  Dimensions
} from 'react-native';

import { strings } from '../../strings';
import { colors } from '../../styles';

import Toolbar from '../../components/Toolbar/ToolbarSearchableComponent';
import Row from '../../components/Row/JobRowComponent'
import Footer from '../../components/Footer/FooterComponent'
import Container from '../../containers';
import TabView from '../Tab/TabViewContainer'

const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
});

const height = Dimensions.get('window').height;

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
            <View style={styles.container}>
                <ListView
                  style={styles.container}
                  dataSource={ds.cloneWithRows(this.props.data)}
                  renderRow={(d) => <Row data={d} onPress={(id) => this.viewJob(id)} />}
                  renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                  renderFooter={() => <Footer />}
                  enableEmptySections={true}
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
  activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: height * 0.8,
   },
});

export default JobsView;