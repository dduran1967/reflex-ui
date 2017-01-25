import React from 'react';
import {Avatar} from '../index';

export const MessageListItem = ({className = '', message, clients, styles}) => {
  return (
    <div className={'disabled w-100 ' + className} style={styles}>

      <h5>{message.name}</h5>
      <p>{message.description}</p>

      <div className="footer">
          <Avatar
            key="red"
            name={'Real Estate Digital'}
            size={50}
            src="http://realestatedigital.com/wp-content/themes/red-theme/images/logo.jpg"
            marginRight="10px"
          />
          <span>&nbsp;</span>
          <Avatar
            key="zillow"
            name={'Zillow'}
            size={50}
            src="http://www.zillowstatic.com/static/images/m/apple-touch-icon.png"
            marginRight="10px"
          />
      </div>
    </div>
  )
};


export default MessageListItem;
