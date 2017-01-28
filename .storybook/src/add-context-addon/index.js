import React from 'react';

export class AddContext extends React.Component {
  static childContextTypes = {
    rebass: React.PropTypes.object
  };

  getChildContext() {
    return {
      rebass: {
        Input: {
          backgroundColor: 'pink'
        }
      }
    }
  }

  render() {
    return this.props.children;
  }
}