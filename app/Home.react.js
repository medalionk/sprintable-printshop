import React, { Component, PropTypes } from 'react';

import Routes from '../routes';
import Container from '../container';
import BottomNavigation from '../components/BottomNavigation';
import ToolbarSpec from '../components/ToolbarSearchable';

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>                             
                <BottomNavigation route={Routes.home} navigator={this.props.navigator}/>               
            </Container>
        );
    }

}

Home.propTypes = propTypes;

export default Home;
