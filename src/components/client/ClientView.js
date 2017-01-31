import React from 'react';
import {observer} from 'mobx-react';
import {Hero} from '../index';
import ui from '../../store/ui';
import clients from '../../store/client';

class ClientView extends React.Component {

  componentWillMount() {
    let id = this.props.params.clientId;
    ui.currentClient = clients.get(id);
  }

  render() {
    let client = ui.currentClient;
    console.log(client)
    return (
      <Hero
        title={client.name}
        text={client.description}
        logo={client.avatar}
      />
    )
  }
}

export default observer(ClientView);
