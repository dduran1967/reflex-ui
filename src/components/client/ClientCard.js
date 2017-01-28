import React from 'react';
import {Card, Avatar, Icon} from '../index';

export const ClientCard = ({client, ...props}) => {
  let {name, description, icon, image, producesMessage, consumesMessage} = client || {...props};
  let avatar = <Avatar src={icon || image} name={name} />
  let messages = [].concat(producesMessage,consumesMessage);
  let footer = (
    <div style={{lineHeight:'24px', verticalAlign:'middle'}}><Icon name="grade"/>{messages.length}</div>
  )
  return (
    <Card
      title={name}
      text={description}
      avatar={avatar}
      footer={footer}
      {...props}
    />
  )
};

ClientCard.propTypes = {...Card.propTypes}

export default ClientCard;
