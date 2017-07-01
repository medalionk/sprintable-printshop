import React, { Component, PropTypes } from 'react';
import { BottomNavigation, Icon } from 'react-native-material-ui';

import Container from '../container';

import JobsContainer from '../containers/Jobs/JobsContainer'
import WipPage from '../pages/WIP'
import SettingsContainer from '../containers/Settings/SettingsContainer'
import ServicesPage from '../pages/profile'

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

var CurrentPage = JobsContainer;
var pageMap = new Map();
pageMap.set('view-list', JobsContainer);
pageMap.set('today', WipPage);
pageMap.set('settings', SettingsContainer);
pageMap.set('mood', ServicesPage);

class BottomNavigationComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { active: 'view-list' };
    }

    updateView(page){
        CurrentPage = pageMap.get(page);
        this.setState({ active: page });
    }
   
    componentWillUpdate
    render() {
        return (
            <Container>
                <Container>
                    <CurrentPage navigator={this.props.navigator}/>
                </Container>
               
                <BottomNavigation active={this.state.active} >
                    <BottomNavigation.Action
                        key="view-list"
                        icon="view-list"
                        label="Jobs"
                        onPress={() => this.updateView('view-list')}    
                    />
                     <BottomNavigation.Action
                        key="today"
                        icon="today"
                        label="WIP"
                        onPress={() => this.updateView('today')}
                    />
                    <BottomNavigation.Action
                        key="settings"
                        icon="settings"
                        label="Settings"
                        onPress={() => this.updateView('settings')}
                    />
                    <BottomNavigation.Action
                        key="mood"
                        icon="mood"
                        label="Lorems"
                        onPress={() => this.updateView('mood')}
                    />
                </BottomNavigation>
            </Container>
        );
    }
}

BottomNavigationComponent.propTypes = propTypes;

export default BottomNavigationComponent;