import React, { Component } from 'react';

import Container from '../../containers';
import ServiceForm from '../../components/Forms/ServiceForm';
import Toolbar from '../../components/Toolbar/ToolbarBackComponent';
import { strings } from '../../strings';

class EditServiceView extends Component {
  
  render() {
    return (
      <Container>
          <Toolbar route={{title: strings.editService}} navigator={this.props.navigator}/>
          <ServiceForm navigator={this.props.navigator}/>
      </Container>
    );
  }
}

export default EditServiceView;