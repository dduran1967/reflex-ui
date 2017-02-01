import React from 'react';
import {Link} from 'react-router';
import {PageHeader, Button, CardListItem, ClientCard} from '../components';
import {observer} from 'mobx-react';

class Home extends React.Component {
  renderClients(clientList) {
    return clientList.map(client => {
      let action = (
        <Link to={`/client/${client.id}`}>
          <Button>...</Button>
        </Link>
      )
      return (
        <CardListItem key={client.id}>
          <ClientCard client={client} footer={action}/>
        </CardListItem>
      )
    })
    .map(card => <CardListItem key={card.id}>{card}</CardListItem>)
  }

  render() {
    return (
      <div>
        <PageHeader heading={'reflex:Connect'}>

        </PageHeader>
      </div>
    )
  }
}

export default observer(Home);
