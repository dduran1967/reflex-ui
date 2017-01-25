import React from 'react';
import {Toolbar, Title, Switch} from './components';

class App extends React.Component {
  static childContextTypes = {
    rebass: React.PropTypes.object
  };

  getChildContext () {
    return {
      rebass: {
        Switch: {
          width: 500
        }
      }
    }
  }

  render() {
    return (
      <div id='App' className="App flexbox column justified">
        <Toolbar>
          <Title>reflex<strong>Connect</strong></Title>
        </Toolbar>
        <div id="main">
          <Switch checked={true}/>
        </div>
      </div>
    )
  }
}

export default App;