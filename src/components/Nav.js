import styled from 'styled-components';
import Link from './Link';

export const Nav = styled.nav`
  margin: 0;
  padding: 0;
  min-height: 64px;
  display: flex;
  flex-direction: ${props => props.stacked ? 'column' : 'row'};
  align-items: ${props => props.stacked ? 'stretch' : 'center'};
  flex-shrink: 0;
  flex-grow: 0;
  flex-wrap: nowrap;
  color: white;
`

export const NavLink = styled(Link)`
  display:     flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  margin: 0,
  padding: 0 1em;
  color: currentColor;
  font-size: .875em;
  height: 56px;
  border: solid 1px #555;
  text-decoration: none;
  &:hover, &:focus {
    background-color: rgba(255,255,255,.2);
    color: white;
    text-decoration: none;
  }
  
`

export default Nav;