import React, { Component, PropTypes } from 'react';
import { Toolbar } from 'react-native-material-ui';

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

class ToolbarSearchableComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: [],
            searchText: '',
        };
    }

    renderToolbar = () => {
            if (this.state.selected.length > 0) {
                return (
                    <Toolbar
                        key="toolbar"
                        leftElement="clear"
                        onLeftElementPress={() => this.setState({ selected: [] })}
                        centerElement={this.state.selected.length.toString()}
                        rightElement={['delete']}
                        style={{
                            container: { backgroundColor: 'white' },
                            titleText: { color: 'rgba(0,0,0,.87)' },
                            leftElement: { color: 'rgba(0,0,0,.54)' },
                            rightElement: { color: 'rgba(0,0,0,.54)' },
                        }}
                    />
                );
            }
            return (
                <Toolbar
                    key="toolbar"
                    leftElement="menu"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement= {this.props.route.title}
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search',
                        onChangeText: value => this.setState({ searchText: value }),
                        onSearchClosed: () => this.setState({ searchText: '' }),
                    }}
                />
            );
        }

    render() {
        return (
            this.renderToolbar() 
        );
    }
}

ToolbarSearchableComponent.propTypes = propTypes;

export default ToolbarSearchableComponent;