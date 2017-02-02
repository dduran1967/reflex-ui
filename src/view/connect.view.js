import React from 'react';
import {observer} from 'mobx-react';
import {CardList, CardListItem, Avatar, Link} from '../components';

class ConnectView extends React.Component {
  constructor(props) {
    super(props);
    this.renderCard = this.renderCard.bind(this);
  }

  renderCard(client) {
    return (
      <CardListItem key={client.id}>
        <div className="card">
          <div className="card-block text-center">
            <Avatar src={client.avatar || client.icon || client.image} name={client.name}/>
          </div>
          <div className="card-block">
            <h5 className="card-title">{client.name}</h5>
            {client.description}
          </div>
          <div className="card-footer">
            <Link to={'/connect/' + client.id}>more...</Link>
          </div>
        </div>
      </CardListItem>
    )
  }

  render() {
    const {clients} = this.props;
    const clientList = clients.list();
    let cards = clientList.map(this.renderCard);
    return (
      <div>
        <CardList>
          {cards}
        </CardList>
      </div>

    )
  }
}

export default observer(ConnectView);