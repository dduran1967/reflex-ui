import React from 'react';
import {Base} from 'rebass';
import config from '../../style/config';
import styled from 'styled-components';

const fontBase = 16;

export const CardBlock = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`;


/**
 * Styled box with border
 */

const Card = ({
  width,
  ...props
}, {rebass}) => {
  const {scale, borderColor} = {...config, ...rebass}

  const sx = {
    minWidth:     '280px',
    display:      'inline-block',
    padding:      '.5rem 1rem',
    marginBottom: '1em',
    borderWidth:  '1',
    borderStyle:  'solid',
    borderColor,
  }

  return (
    <Base
      {...props}
      className='Card'
      baseStyle={sx}/>
  )
}

Card.propTypes = {
  /** Width of card */
  width:           React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  backgroundColor: React.PropTypes.string,
}

Card.defaultProps = {
  rounded: true
}

Card.contextTypes = {
  rebass: React.PropTypes.object
}

export default Card;


