import React from 'react';
import styled from 'styled-components';

import theme from '../style/theme';

class Toolbar extends React.Component {
  render() {
    let {height, backgroundColor} = this.props;
    let style = Object.assign({}, theme.toolbar, height, backgroundColor);
    return (
      <div className="toolbar" style={style}>
          {this.props.children}
      </div>
    )
  }

  static propTypes = {
    height:          React.PropTypes.string,
    backgroundColor: React.PropTypes.string
  };

}

export const ToolbarItem  = styled.div`
  height: 100%;
  margin-left: 16px;
  margin-right: 16px;
`;

export default Toolbar
