import React from 'react';
import {Hero} from '../index';

class ClientView extends React.Component {
  render() {
    const {client} = this.props;
    return (
      <Hero
        title={client.name}
        text={client.description}
        logo={client.avatar}
      />
    )
  }
}

export default ClientView;
