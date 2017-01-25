import React from 'react';
import {observer} from 'mobx-react';
import {Switch} from '../index';

//<a href="#" className="list-group-item list-group-item-action">
//  <MessageListItem
//    message={message}
//    clients={clients}
//  />
//</a>

export const ClientView = ({
  user = {},
  client = {},
  styles,
}) => {
  let clientStatusActive = false;
  let switchColor = clientStatusActive ? 'green' : 'red';
  return (
    <div id="clientViewContent">
      {/*message status*/}
      <div>
        {clientStatusActive &&
        <div className="alert alert-success mx-3 py-3">
          <span>{client.name} integration enabled.</span>
        </div>
        }
        <div className="justify-content-between d-flex">
          <div className="mb-2 ml-4">
            <h3 >{client.name} integration messages</h3>
            {!clientStatusActive &&
            <p>Enable {client.name} to integrate with your business.</p>
            }
          </div>
          <div className="mr-3"><Switch style={{backgroundColor: switchColor}} checked={clientStatusActive}/></div>
        </div>

        <div className="list-group">
        </div>
      </div>

    </div> // main content
  )
};

export default observer(ClientView);
