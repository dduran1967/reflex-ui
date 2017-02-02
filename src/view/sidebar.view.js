import React from 'react';
import {Drawer, PageHeader, Nav, NavLink, Icon} from '../components';
import {colors} from '../style/config';

function Sidebar({open, toggleSidebar, onNav}) {
  return (
    <Drawer open={open}>
      <PageHeader style={{
        backgroundColor: colors.grayDark,
        color:           'white',
        justifyContent:  'space-between'
      }}>
        <h3>Reflex</h3>
        <a href="#" onClick={toggleSidebar}><Icon name="close"/></a>
      </PageHeader>
      <Nav stacked>
        <NavLink to="/" onClick={onNav.bind(this, 'Home')}>
          <Icon name="home" style={{marginRight: '1em'}}/>
          Home
        </NavLink>
        <NavLink to="/connect" onClick={onNav.bind(this, 'Connect')}>
          <Icon name="connect" style={{marginRight: '1em'}}/>
          Connect
        </NavLink>
        <NavLink to="/events" onClick={onNav.bind(this, 'Events')}>
          <Icon name="history" viewBox="0 0 26 24" style={{marginRight: '1em'}}/>
          Events
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