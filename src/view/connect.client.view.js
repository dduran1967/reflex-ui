import React from 'react';
import {Hero} from '../components';

class ConnectClientView extends React.Component {
  render() {
    const {controller, clientId} = this.props;
    const client = controller.get(clientId);
    return (
      <Hero
        title={client.name}
        text={client.description}
        logo={client.avatar}
      />
    )
  }
}

export default ConnectClientView;
