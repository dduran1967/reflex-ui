import React from 'react';
import {Drawer, DrawerHeader, Nav, NavLink} from '../components';
import {observer} from 'mobx-react'
import ui from '../store/ui';

function Sidebar() {
  return (
    <Drawer open={ui.drawerOpen}>
      <DrawerHeader>
        <span className="mdl-layout-title">Title</span>
      </DrawerHeader>
      <Nav stacked style={{color:'white'}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/connect">Connect</NavLink>
        <NavLink to="/messages">Messages</NavLink>
      </Nav>
    </Drawer>
  )
}

export default observer(Sidebar);