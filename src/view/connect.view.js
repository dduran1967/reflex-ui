import React from 'react';
import {observer} from 'mobx-react';
import clients from '../store/client';
//import uiStore from '../store/ui';
import {ClientCard, CardList, CardListItem} from '../components';

class ConnectView extends React.Component {
  render() {
    let listItems =
      clients.list()
      .map(
        (client) =>
          <CardListItem key={client.id}>
            <ClientCard client={client}/>
          </CardListItem>
      );
    return (
      <div>
        <CardList>
          {listItems}
        </CardList>
      </div>

    )
  }
}

export default observer(ConnectView);