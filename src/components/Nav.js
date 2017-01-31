import styled from 'styled-components';
import Link from './Link';

export const Nav = styled.nav`
  margin: 0;
  padding: 0;
  height: 64px;
  display: flex;
  flex-direction: ${props => props.stacked ? 'column' : 'row'};
  align-items: ${props => props.stacked ? 'stretch' : 'center'};
  flex-shrink: 0;
  flex-grow: 1;
  flex-wrap: nowrap;
`

export const NavLink = styled(Link)`
  display:     block;
  line-height: 64px;
  padding:     0 24px;
  color:       inherit;
`

export default Nav;