import React from 'react';
import {Link} from 'react-router';
import {Hero, Container, CardListItem, CardList, Button} from '../components';
import ClientCard from '../components/client/ClientCard';
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
        <Hero title="browse"/>
        <Container>
          <CardList>
          </CardList>
        </Container>
      </div>
    )
  }
}

export default observer(Home);
