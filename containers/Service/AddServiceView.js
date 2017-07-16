import React, { Component } from 'react';

import Container from '../../containers';
import ServiceForm from '../../components/Forms/ServiceForm';
import Toolbar from '../../components/Toolbar/ToolbarBackComponent';
import { strings } from '../../strings';

class AddServiceView extends Component {
  
  render() {
    return (
      <Container>
          <Toolbar route={{title: strings.addService}} navigator={this.props.navigator}/>
          <ServiceForm navigator={this.props.navigator}/>
      </Container>
    );
  }
}

export default AddServiceView;