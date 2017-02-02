import React from 'react';
import styled from 'styled-components';

const defaultProps = {
  title:           '',
  backgroundColor: '',
  color:           'inherit',
  height:          '96px',
  px:              '1em',
  py:              '0',
}

const PageHeader = styled.header`
  display:        flex;
  flex-direction: row;
  align-items:    center;
  width           100%;
  
  min-height:     96px;
  height: ${props => props.large ? '280px' : '96px'};
  
  padding:        ${props => (props.py + ' ' + props.px)};
  margin-bottom: 1em;
  border-bottom: solid 1px rgba(0,0,0,.25);
  
  .title {
    font-size:   24px;
    color:       inherit;
    font-weight: bold;
  }
`
PageHeader.propTypes = {
  title:           React.PropTypes.string,
  backgroundColor: React.PropTypes.string,
  color:           React.PropTypes.string,
  height:          React.PropTypes.string,
  py:              React.PropTypes.string,
  px:              React.PropTypes.string,
  mx:              React.PropTypes.string,
  my:              React.PropTypes.string,
}

PageHeader.defaultProps = defaultProps;

export default PageHeader;
