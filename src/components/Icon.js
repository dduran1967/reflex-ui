// see https://material.io/icons/ for available icons
import React, {Component} from 'react';
import classnames from 'classnames';
import {color, icon} from '../style/theme';

const COLORS = Object.keys(color);

class Icon extends Component {

  static propTypes = {
    name:     React.PropTypes.string,
    fontSize: React.PropTypes.string,
    color:    React.PropTypes.string
  };

  static defaultProps = {
    name:     'grade',
    fontSize: '24px',
    color:    'inherit'
  };

  render() {
    let classes = ['material-icons'];
    let style = Object.assign({}, icon);
    let {name, fontSize, color} = this.props;

    if (!!color) {
      if (COLORS.includes(color)) {
        classes.push('text-' + color);
      } else {
        style.color = color;
      }
    }

    if (!!fontSize) {
      style.fontSize = fontSize;
    }

    return (
      <i className={classnames(...classes)} style={style}>{name}</i>
    )
  }
}


export default Icon
