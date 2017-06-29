import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  View
} from 'react-native';

import Row from '../components/Row'
import Footer from '../components/Footer'
import data from '../data'
import Toolbar from '../components/ToolbarSearchable';
import Container from '../container';
import ItemRootPage from '../pages/ItemRoot'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    flex: 1,
    height: 5,
    backgroundColor: 'transparent',
  },
});

class WIP extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(data)
    }
  }

  viewJob(id){
        this.props.navigator.push({title: 'Details', Page: ItemRootPage})
  }

  render() {
    return (
      <Container>
        <Toolbar route={{title: 'WIP'}} navigator={this.props.navigator}/>
        <View style={styles.container}>
                <ListView
                  style={styles.container}
                  dataSource={this.state.dataSource}
                  renderRow={(d) => <Row data={d} onPress={(id) => this.viewJob(id)} />}
                  renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                  renderFooter={() => <Footer />}
                  on
                />       
          </View>
      </Container>
    );
  }
}

export default WIP;
