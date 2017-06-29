import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  View
} from 'react-native';
import { strings } from '../../strings';
import { colors } from '../../styles';


import Row from '../../components/Row'
import Footer from '../../components/Footer'
import Toolbar from '../../components/ToolbarSearchable';
import Container from '../../container';
import ItemRootPage from '../../pages/ItemRoot'
import data from '../../data2'

class JobsContainer extends Component {
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
        this.props.navigator.push({title: strings.details, Page: ItemRootPage, navigator:this.props.navigator})
  }

  render() {
    return (
      <Container>
        <Toolbar route={{title: strings.jobs}} navigator={this.props.navigator}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    flex: 1,
    height: 5,
    backgroundColor: colors.transparent,
  },
});

export default JobsContainer;
