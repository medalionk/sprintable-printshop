import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  View
} from 'react-native';
import { strings } from '../../strings';
import { colors } from '../../styles';


import Row from '../../components/Row/RowComponent'
import Footer from '../../components/Footer/FooterComponent'
import Toolbar from '../../components/Toolbar/ToolbarSearchableComponent';
import Container from '../../containers';
import ItemRootPage from '../ItemRoot/ItemRootContainer'
import data from '../../api/mock'

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
