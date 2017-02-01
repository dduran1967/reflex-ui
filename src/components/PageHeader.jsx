import React from 'react';
import styled from 'styled-components';

const defaultProps = {
  title:           '',
  backgroundColor: '',
  color:           'inherit',
  height:          '96px'
}

const PageHeader = styled.header`
  display:        flex;
  flex-direction: row;
  align-items:    center;
  
  min-height:     96px;
  height: ${props => props.large ? '280px' : '96px'};
  width           100%;
  
  padding:        0px 1em;
  margin-bottom: 1em;
  border-bottom: solid 1px rgba(0,0,0,.25);
  
  .title {
    font-size:   24px;
    color:       inherit;
    font-weight: bold;
  }
`
PageHeader.propTypes = {
  title: React.PropTypes.string
}

PageHeader.defaultProps = {
  title: 'reflex:Connect'
}

export default PageHeader;
