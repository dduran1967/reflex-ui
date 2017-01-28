import React from 'react';
import config from './style/config';

class App extends React.Component {
  static childContextTypes = {
    rebass: React.PropTypes.object
  };

  getChildContext () {
    return {
      rebass: {...config}
    }
  }

  render() {
    return (
      <div id='App' className="App">
        {this.props.children}
      </div>
    )
  }
}

export default App;