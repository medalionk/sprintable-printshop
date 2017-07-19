import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  View,
  Dimensions
} from 'react-native';

import { colors } from '../../styles';
import Row from './JobRowComponent'
import Footer from '../../components/Footer/FooterComponent'
import Container from '../../containers';

const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
});

const height = Dimensions.get('window').height;

class JobsListComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <ListView
              style={styles.container}
                dataSource={ds.cloneWithRows(this.props.data)}
                renderRow={(d) => <Row data={d} onPress={(id) => this.props.onPressHandler(id)} />}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                //renderFooter={() => <Footer />}
                enableEmptySections={true}
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

export default JobsListComponent;