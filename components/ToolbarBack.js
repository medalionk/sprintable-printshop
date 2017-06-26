import React, { Component, PropTypes } from 'react';
import { Toolbar } from 'react-native-material-ui';

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

class ToolbarBack extends Component {
    render() {
        return (
            <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
        );
    }
}

ToolbarBack.propTypes = propTypes;

export default ToolbarBack;