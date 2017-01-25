import React from 'react'
import classnames from 'classnames'
import { compose } from '../lib/compose'
import FormItem from './higherOrders/FormItem'
import PureRender from './mixins/PureRender'

import _styles from './styles/_radio-checkbox.scss'

export class Checkbox extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, checked) {
    const { readOnly, onChange, checkValue, index } = this.props;

    if (!readOnly && onChange) {
      checked = event ? event.target.checked : checked;
      const value = checked ? checkValue : undefined;
      onChange(value, checked, index)
    }
  }

  getCheckStatus () {
    const { value, checked, checkValue } = this.props;
    if (checked !== undefined) {
      return checked
    }
    return value === checkValue
  }

  render () {
    const { style, className, block, readOnly, checkValue, isIndicator, indeterminate, text, children } = this.props;
    const checked = this.getCheckStatus();

    let labelClass = classnames(
      className,
      _styles.checkbox,
      readOnly && _styles.disabled,
      block ? _styles.block : _styles.inline,
      checked && _styles.checked,
      indeterminate && _styles.indeterminate,
      isIndicator && _styles.noPadding
    );

    return (
      <label style={style} className={ labelClass }>
        <input type="checkbox"
               disabled={readOnly}
               onChange={this.handleChange}
               checked={checked}
               value={checkValue}
        />
        <span className={_styles.indicator}></span>
        {(text && !isIndicator) && <span>{text}</span>}
        {children}
      </label>
    )
  }
}

Checkbox.propTypes = {
  block: React.PropTypes.bool,
  checkValue: React.PropTypes.any,
  checked: React.PropTypes.bool,
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  indeterminate: React.PropTypes.bool,
  index: React.PropTypes.number,
  isIndicator: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  position: React.PropTypes.number,
  readOnly: React.PropTypes.bool,
  style: React.PropTypes.object,
  text: React.PropTypes.any,
  value: React.PropTypes.any
};

Checkbox.defaultProps = {
  checkValue: true
};

function assetCheck (Component) {
  function Checked (props) {
    const { value, checkValue, ...other } = props;
    let cv = checkValue !== undefined ? checkValue
      : value !== undefined ? value : true;
    return <Component {...other} checkValue={cv} />
  }

  Checked.propTypes = {
    checkValue: React.PropTypes.any,
    value: React.PropTypes.any
  };

  return Checked
}

export default compose(
  assetCheck,
  FormItem.register('checkbox', {}),
  PureRender()
)(Checkbox)
