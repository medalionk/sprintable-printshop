import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SettingsList from 'react-native-settings-list';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { strings } from '../../strings';
import { colors } from '../../styles';
import Toolbar from '../../components/Toolbar/ToolbarComponent';
import Container from '../../containers';
import ProfileContainer from '../Profile/ProfileContainer'

const ItemIconSize = 30;
const ItemWidth = 70;
const SubMenuWidth = 50;

class SettingsContainer extends Component {
  constructor(){
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {switchValue: false};
  }

  onValueChange(value){
    this.setState({switchValue: value});
  }

  onProfilePush(){
        this.props.navigator.push({title: strings.profile, Page: ProfileContainer, navigator:this.props.navigator})
  }

  onServicePush(){
        this.props.navigator.push({title: strings.profile, Page: ProfileContainer, navigator:this.props.navigator})
  }

  render() {
    return (
      <Container>
        <Toolbar title='Settings' navigator={this.props.navigator}/>
        <View style={styles.itemsStyle}>
          <SettingsList borderColor='#d6d5d9' defaultItemSize={50}>
            <SettingsList.Item
              hasNavArrow={false}
              title='Sub Settings'
              titleStyle={styles.subMenuTitleStyle}
              itemWidth={SubMenuWidth}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={<Icon size={ItemIconSize} name="account-circle" style={styles.iconStyle}/>}
              title='Profile'
              itemWidth={ItemWidth}
              titleStyle={styles.itemTitleStyle}
              hasNavArrow={false}
              onPress={() => { this.onProfilePush()}}
            />
            <SettingsList.Item
              icon={<Icon size={ItemIconSize} name="view-list" style={styles.iconStyle}/>}
              hasNavArrow={false}
              itemWidth={ItemWidth}
              titleStyle={styles.itemTitleStyle}
              title='Services'
              onPress={() => { this.onServicePush()}}
            />
            <SettingsList.Header headerStyle={{marginTop:-5}}/>
            <SettingsList.Item
              hasNavArrow={false}
              title='Another Sub Settings'
              titleStyle={styles.subMenuTitleStyle}
              itemWidth={SubMenuWidth}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={<Icon size={ItemIconSize} name="build" style={styles.iconStyle}/>}
              title='Lorem Ipsum'
              itemWidth={ItemWidth}
              titleStyle={styles.itemTitleStyle}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={<Icon size={ItemIconSize} name="copyright" style={styles.iconStyle}/>}
              title='Lorem Ipsum'
              itemWidth={ItemWidth}
              titleStyle={styles.itemTitleStyle}
              hasNavArrow={false}
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasSwitch={true}
            />
            <SettingsList.Item
              icon={<Icon size={ItemIconSize} name="extension" style={styles.iconStyle}/>}
              title='Lorem Ipsum'
              itemWidth={ItemWidth}
              titleStyle={styles.itemTitleStyle}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={<Icon size={ItemIconSize} name="history" style={styles.iconStyle}/>}
              title='Lorem Ipsum'
              itemWidth={ItemWidth}
              titleStyle={styles.itemTitleStyle}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={<Icon size={ItemIconSize} name="lock" style={styles.iconStyle}/>}
              title='Lorem Ipsum'
              itemWidth={ItemWidth}
              titleStyle={styles.itemTitleStyle}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={<Icon size={ItemIconSize} name="receipt" style={styles.iconStyle}/>}
              title='Lorem Ipsum'
              itemWidth={ItemWidth}
              titleStyle={styles.itemTitleStyle}
              hasNavArrow={false}
            />
            <SettingsList.Header headerStyle={{marginTop: -5}}/>
          </SettingsList>
        </View>
      
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  iconStyle:{
    marginLeft:10,
    marginRight:15,
    alignSelf:'center',
    justifyContent:'center',
    color:"#009688",
  },
  itemTitleStyle:{
    color:'black',
    fontSize: 16
  },
  subMenuTitleStyle:{
    color:'#009688', 
    marginBottom:10, 
    fontWeight:'bold'
  },
  itemsStyle:{
   backgroundColor:'#f6f6f6',
   flex:1,
  },
});

export default SettingsContainer;