import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons'

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

export default class TabView extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'First', icon: 'home'  },
      { key: '2', title: 'Second', icon: 'settings' },
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
        '1': FirstRoute,
        '2': SecondRoute,
    });

  render() {
    return (
      <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#222',
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
});