import React from 'react';
import {Link} from 'react-router';
import {Button, CardListItem, ClientCard} from '../components';
import {observer} from 'mobx-react';

class Home extends React.Component {

  componentWillMount() {
    console.log(this.props)
  }

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
        <h3>what to put on this page?</h3>
        <ul>
          <li>dashboard</li>
          <li>notifications</li>
          <li>social/business feed</li>
        </ul>
      </div>
    )
  }
}

export default observer(Home);
