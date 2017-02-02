import React from 'react';
import Link from 'react-router/Link';
import {observer} from 'mobx-react';
import {ListGroup, ListGroupItemAction, MessageListItem} from '../components';
import messages from '../store/message';

class MessagesView extends React.Component {

  render() {
    let items = messages.list().map(message => {
      return (
        <ListGroupItemAction key={message.id}>
          <Link to={'/messages/' + message.id}>
            <MessageListItem
              name={message.name}
              description={message.description}
            />
          </Link>
        </ListGroupItemAction>
      )
    });
    return(
      <div>
        <div>
          <ListGroup>
            {items}
          </ListGroup>
        </div>
      </div>
    )
  }
}

export default observer(MessagesView);