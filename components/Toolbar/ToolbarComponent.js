import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

const propTypes = {
    title: PropTypes.string.isRequired,
};

class ToolbarSpecComponent extends Component {
    render() {
        return (
            <View>
                <Toolbar 
                    leftElement="menu"
                    centerElement={this.props.title} />
            </View>
        );
    }
}

ToolbarSpecComponent.propTypes = propTypes;

export default ToolbarSpecComponent;