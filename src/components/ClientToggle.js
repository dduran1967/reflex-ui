import React from 'react';
import {Switch} from 'rebass';
import {observer} from 'mobx-react';

class ClientToggle extends React.Component {

  render(){
    return(
      <div>
        <Switch checked={this.props.user.messageClient.includes(client.id)} onClick={this.handleToggle}/>
      </div>
    )
  }
  handleToggle() {
    console.log(arguments);
  }
}

export default ClientToggle;