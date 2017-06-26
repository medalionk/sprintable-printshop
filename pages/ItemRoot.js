import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Toolbar from '../components/ToolbarBack';
import Container from '../container';
import DetailsPage from '../pages/Details'

//const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

export default class ItemRoot extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Job Details', icon: 'home'  },
      { key: '2', title: 'Message Client', icon: 'settings' },
    ],
  };

    _renderIcon = ({ route }) => {
        return <Icon size={24} color="white" name={route.icon}/>
    };

    _handleChangeTab = index => this.setState({ index });

    _renderHeader = props => {
        return (
        <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            renderIcon={this._renderIcon}
            style={styles.tabbar}
        />
        );
    };

    _renderScene = SceneMap({
        '1': DetailsPage,
        '2': SecondRoute,
    });

  render() {
    return (
      <Container>
        <Toolbar route={{title: 'Details'}} navigator={this.props.navigator}/>
        <TabViewAnimated
          style={[styles.container, this.props.style]}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onRequestChangeTab={this._handleChangeTab}
        />
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#228B22',
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
});