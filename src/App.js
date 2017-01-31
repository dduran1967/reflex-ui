import React from 'react';
import {observer} from 'mobx-react';
import store from './store';
import DevTools from 'mobx-react-devtools';
import Match from 'react-router/Match';
import {HomeView, MessagesView, MessageView} from './view';
import {Icon} from './components';
import Sidebar from './view/sidebar.view';
import styleConfig from './style/config';
import './style/index.css';

class App extends React.Component {

  static childContextTypes = {
    rebass: React.PropTypes.object
  };

  getChildContext() {
    return {
      rebass: {...styleConfig}
    }
  }

  toggleNav() {
    store.ui.drawerOpen = !store.ui.drawerOpen;
  }

  render() {
    return (
      <div>
        <a
          href="#"
          style={{
            position: 'absolute',
            top:      '16px',
            left:     '16px',
            zIndex:   '1080',
            backgroundColor: 'transparent',
            color: 'white'
          }}
          onClick={this.toggleNav}
        >
          <Icon name="menu"/>
        </a>
        <div className="d-flex flex-row">
          <Sidebar/>
          <div id="contentWrapper" className="w-100">
            <main id="mainContent">
              <Match exactly pattern="/" component={HomeView}/>
              <Match exactly pattern="/messages" component={MessagesView}/>
              <Match exactly pattern="/messages/:messageId" component={MessageView}/>
              {/*<Match exactly pattern={"/client/:clientId"} component={ClientView}/>*/}
            </main>
          </div>
        </div>
        <DevTools/>
      </div>
    )
  }
}

export default observer(App);
