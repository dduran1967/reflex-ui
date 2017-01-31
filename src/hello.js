import React from 'react';
import user from './store/user'


import {observer} from 'mobx-react';
class Hello extends React.Component {
  render(){
    return(
      <h1>Hello {user.name}</h1>
    )
  }
}
export default observer(Hello);
