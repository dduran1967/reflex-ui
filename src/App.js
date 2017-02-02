import React from 'react';
import {observer} from 'mobx-react';
import store from './store';
import DevTools from 'mobx-react-devtools';
import Match from 'react-router/Match';
import {HomeView, MessagesView, MessageView, ConnectView, ConnectClientView} from './view';
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
    const {ui} = this.props.store;
    return (
      <div>
        <div className="d-flex flex-row">
          <Sidebar open={ui.sidebar.open} toggleSidebar={ui.toggleSidebar} onNav={ui.setPageTitle}/>
          <div id="contentWrapper" className="w-100">
            <PageHeader>
              {!ui.sidebar.open &&
              <a href="#" onClick={this.toggleNav}><Icon name="menu" style={{marginRight: '1em'}}/></a>
              }
              <div className="title">{ui.pageTitle}</div>
            </PageHeader>
            <main id="mainContent" style={{padding: '0 1em'}}>
              <Match exactly pattern="/" render={() => <HomeView {...this.props} />}/>
              <Match exactly pattern="/events" component={MessagesView}/>
              <Match exactly pattern="/messages/:messageId"
                     render={({params}) => {
                       let messageId = params.messageId;
                       store.message.viewMessage(messageId);
                       ui.pageTitle = store.message.currentMessage.name;
                       return <MessageView message={store.message.currentMessage}/>
                     }}
              />
              <Match exactly pattern="/connect"
                     render={() => <ConnectView clients={store.client}/>}
              />
              <Match exactly pattern={"/connect/:clientId"}
                     render={({params}) => {
                       return (
                         <ConnectClientView
                           controller={this.props.store.client}
                           clientId={params.clientId}
                         />
                       )
                     }}
              />
            </main>
          </div>
        </div>
        <DevTools/>
      </div>
    )
  }
}

export default observer(App);
