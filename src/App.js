import React from 'react';
import {observer} from 'mobx-react';
import store from './store';
import DevTools from 'mobx-react-devtools';
import Match from 'react-router/Match';
import {HomeView, MessagesView, MessageView, ConnectView} from './view';
import {Icon, PageHeader} from './components';
import Sidebar from './view/sidebar.view';
import styleConfig from './style/config';
import './style/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
  }

  static childContextTypes = {
    rebass: React.PropTypes.object
  };

  getChildContext() {
    return {
      rebass: {...styleConfig}
    }
  }

  toggleNav() {
    store.ui.sidebar.open = !store.ui.sidebar.open;
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-row">
          <Sidebar open={store.ui.sidebar.open} toggleSidebar={store.ui.toggleSidebar}/>
          <div id="contentWrapper" className="w-100">
            <PageHeader>
              {!store.ui.sidebar.open &&
              <a href="#" onClick={this.toggleNav}><Icon name="menu" style={{marginRight: '1em'}} /></a>
              }
              <div className="title">{store.ui.page.title}</div>
            </PageHeader>
            <main id="mainContent" style={{padding: '0 1em'}}>
              <Match exactly pattern="/" render={() => <HomeView {...this.props} />}/>
              <Match exactly pattern="/messages" component={MessagesView}/>
              <Match exactly pattern="/messages/:messageId" component={MessageView}/>
              <Match exactly pattern="/connect" component={ConnectView}/>
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
