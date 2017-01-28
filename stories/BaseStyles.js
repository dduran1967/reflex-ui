import React from 'react';
import config from '../src/style/config';


export default class BaseStyles extends React.Component {
  static childContextTypes = {
    rebass: React.PropTypes.object
  };

  getChildContext() {
    return {
      rebass: {...config}
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}
