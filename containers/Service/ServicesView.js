import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  View
} from 'react-native';

import {
    ActionButton,
    Avatar,
    
    Icon,
} from 'react-native-material-ui';

import { strings } from '../../strings';
import { colors } from '../../styles';
import Toolbar from '../../components/Toolbar/ToolbarBackComponent';
import Row from '../../components/Row/ServiceRowComponent'
import Container from '../../containers';
import ServiceDetailsView from './ServiceDetailsViewContainer'
import AddServiceView from '../Service/AddServiceViewContainer'
import data from '../../api/mock'

class ServicesView extends Component {
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
        this.props.navigator.push({title: strings.service, Page: ServiceDetailsView, navigator:this.props.navigator})
  }

  onAddServicePush(){
        this.props.navigator.push({title: strings.addService, Page: AddServiceView, navigator:this.props.navigator})
  }

  render() {
    return (
      <Container>
        <Toolbar route={{title: strings.services}} navigator={this.props.navigator}/>
        <View style={styles.container}>
                <ListView
                  style={styles.container}
                  dataSource={this.state.dataSource}
                  renderRow={(d) => <Row data={d} onPress={(id) => this.viewJob(id)} />}
                  renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                  on
                />       
          </View>
          <ActionButton
                    actions={[]}
                    hidden={this.state.bottomHidden}
                    icon="add"
                    onPress={(action) => this.onAddServicePush()}
                    style={{
                        positionContainer: { bottom: 20 },
                    }}
                />
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

export default ServicesView;