import React, { Component, PropTypes } from 'react';
import { BottomNavigation, Icon } from 'react-native-material-ui';
import Routes from '../../config/routes';
import Container from '../../containers';

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

class HomeView extends Component {
    constructor(props) {
        super(props);

        CurrentPage = Routes.jobs;
        this.state = { active: 'view-list' };
    }

    updateView(page){
        CurrentPage = page;
        this.setState({ active: page.Icon });
    }

    componentWillUpdate

    render() {
        return (
            <Container>
                <Container>
                    <CurrentPage.Page navigator={this.props.navigator}/>
                </Container>
               
                <BottomNavigation active={this.state.active} >
                    <BottomNavigation.Action
                        key={Routes.jobs.Icon}
                        icon={Routes.jobs.Icon}
                        label={Routes.jobs.title}
                        onPress={() => this.updateView(Routes.jobs)}      
                    />
                     <BottomNavigation.Action
                        key={Routes.wip.Icon}
                        icon={Routes.wip.Icon}
                        label={Routes.wip.title}
                        onPress={() => this.updateView(Routes.wip)}
                    />
                    <BottomNavigation.Action
                        key={Routes.settings.Icon}
                        icon={Routes.settings.Icon}
                        label={Routes.settings.title}
                        onPress={() => this.updateView(Routes.settings)}
                    />
                    <BottomNavigation.Action
                        key={Routes.dummy.Icon}
                        icon={Routes.dummy.Icon}
                        label={Routes.dummy.title}
                        onPress={() => this.updateView(Routes.dummy)}
                    />
                </BottomNavigation>                                            
            </Container>
        );
    }

}

HomeView.propTypes = propTypes;

export default HomeView;
