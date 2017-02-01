import React from 'react';
import {Drawer, PageHeader, Nav, NavLink, Icon} from '../components';
import {colors} from '../style/config';

function Sidebar(props) {
  return (
    <Drawer open={props.open}>
      <PageHeader style={{
        backgroundColor: colors.grayDark,
        color:           'white',
        justifyContent:  'space-between'
      }}>
        <h3>Reflex</h3>
        <a href="#" onClick={props.toggleSidebar}><Icon name="close"/></a>
      </PageHeader>
      <Nav stacked>
        <NavLink to="/">
          <Icon name="home" style={{marginRight: '1em'}} />
          Home
        </NavLink>
        <NavLink to="/connect">
          <Icon name="connect" style={{marginRight: '1em'}} />
          Connect
        </NavLink>
        <NavLink to="/messages">
          <Icon name="history" viewBox="0 0 26 24" style={{marginRight: '1em'}} />
          History
        </NavLink>
      </Nav>
    </Drawer>
  )
}

Sidebar.propTypes = {
  open: React.PropTypes.bool
}
Sidebar.defaultProps = {
  open: false
}

export default Sidebar;