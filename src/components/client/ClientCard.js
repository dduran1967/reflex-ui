import React from 'react';
import {Card, Avatar} from '../index';

const ClientCard = ({client, ...props}) => {
  let {name, description, avatar, icon, image, producesMessage, consumesMessage} = client || {...props};
  let avatarInstance = <Avatar src={avatar || icon || image} name={name}/>
  let messages = [].concat(producesMessage, consumesMessage);
  let footer = (
    <div style={{lineHeight: '24px', verticalAlign: 'middle'}}>{messages.length}</div>
  )
  return (
    <Card
      title={name}
      text={description}
      avatar={avatarInstance}
      footer={footer}
      {...props}
    />
  )
};

ClientCard.propTypes = {
  backgroundColor: React.PropTypes.string,
  color:           React.PropTypes.string,
  client:          React.PropTypes.object,
  footer:          React.PropTypes.node,
}

export default ClientCard;
