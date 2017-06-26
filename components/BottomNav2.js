import React, { Component, PropTypes  } from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Container from '../container';

import OpenJobsPage from '../pages/OpenJobs'
import WipPage from '../pages/WipPage'
import SettingsPage from '../pages/Settings'


import { Toolbar} from 'react-native-material-ui';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

var pageMap = new Map();
pageMap.set(0, OpenJobsPage);
pageMap.set(1, WipPage);
pageMap.set(2, SettingsPage);

var CurrentPage = OpenJobsPage;

class BottomNav extends Component {
  constructor(props) {
        super(props);

        this.state = { active: 0 };
    }
    //componentWillUpdate

    update(page){
    switch (page) {
      case 0:
          CurrentPage = OpenJobsPage;
          break;
      case 1:
          CurrentPage = SettingsPage;
          break;
      case 2:
          CurrentPage = WipPage;
          break;
      default:
        CurrentPage = OpenJobsPage;
    }
    //console.log('Firstdddd: ' + CurrentPage);
    //console.log('First: ' + page);
  }
  render() {
    return (
      <Container>
          <CurrentPage/>
          
          <BottomNavigation
              labelColor="black"
              rippleColor="green"
              style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
              //onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex + 6}`)}
              //onTabChange={(val) => this.setState({value:val})}
              onTabChange={(val) =>{
                this.update(val);
                  //console.log('NavChanged');
                  this.setState({ active:0 });
                  //alert(`New Tab at position ${val}`)
                  //this.props.update(val);
                  //console.log(this.CurrentPage);
                }}
              >
              <Tab
               // barBackgroundColor="#37474F"
                label="Open Jobs"
                icon={<Icon size={24} name="home" />}
                activeIcon={<Icon size={24} color="green" name="home"/>}
              />
              <Tab
                //barBackgroundColor="#00796B"
                label="Settingsd"
                icon={<Icon size={24} name="settings" />}
                activeIcon={<Icon size={24} color="green" name="settings"/>}
              />
              <Tab
                //barBackgroundColor="#5D4037"
                label="WIPe"
                icon={<Icon size={24} name="person" />}
                activeIcon={<Icon size={24} color="green" name="person"/>}
              />
              
          </BottomNavigation>
      </Container>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

BottomNav.propTypes = propTypes;
export default BottomNav;