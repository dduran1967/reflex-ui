import React from 'react';
import {observer} from 'mobx-react'
import Toolbar from '../components/Toolbar';

class Appbar extends React.Component {
  render() {
    return (
      <Toolbar>
        <div className="h4">Reflex:Connect</div>
      </Toolbar>
    )
  }
}
export default observer(Appbar);