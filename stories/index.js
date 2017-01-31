import React from 'react';
import BaseStyles from './BaseStyles';
import {storiesOf} from '@kadira/storybook';
import {addWithInfo} from '@kadira/react-storybook-addon-info';
import {
  Signup,
  ClientCard,
  CardList,
  CardListItem,
  Container,
  Splash,
  Hero,
  MessageList,
  Switch,
  Avatar,
  Flex,
  Box
} from '../src/components';
import {PageHeader} from 'rebass';

import state from './storydata';
import '../src/style/index.css';
import './stories.css';

window.state = state;

const views = storiesOf('reflex-ui views', module);

views.add('splash screen', () => (
  <div className="container-fluid">
    <Splash
      title="Make a splash"
      text={'customize this screen.'}
    />
  </div>
));

views.add('finding connections', () => {
  let clientCards =
    state.clientList
    .map(client => <CardListItem><ClientCard {...client}/></CardListItem>)
  return (
    <BaseStyles>
      <Hero
        title="reflexConnect"
        text="Select a vendor from the list below to start connecting your business tools."
        logo={"bhhs-logo-dark.png"}
      />
      <Container>
        <div className="alert alert-info">
          note: this is a list of available relfex vendors.
        </div>
        <CardList>
          {clientCards}
        </CardList>
      </Container>
    </BaseStyles>
  )
});

views.add('starting a connection', () => {
  let client = state.client;
  let footer = (
    <div>
      <Switch checked={false}/>
    </div>
  );

  return (
    <div className="container-fluid">

      <Hero
        title={client.name}
        text={client.description}
        logo={'smarter-agent-icon.png'}
        footer={footer}
      />

      <div className="container">

        <section className="Section mb-5">
          <header className="mb-4">
            <h3 className="d-inline mr-3">Connections</h3>
            <span className="text-muted">
              Enabling {client.name} provides automatic integration with these systems.
            </span>
          </header>
          <ul className="list-inline mt-4">
            <li className="list-inline-item mr-4"><Avatar
              src={'http://realestatedigital.com/wp-content/themes/red-theme/images/logo.jpg'} size={50}/></li>
            <li className="list-inline-item mr-4"><Avatar
              src={'http://www.lwolf.com/GlobalTemplates/OfficeTemplates/LW-CompanySite/2015/images/lone-wolf-logo.svg'}
              size={50}/></li>
            <li className="list-inline-item mr-4"><Avatar
              src={'http://www.zillowstatic.com/static/images/m/apple-touch-icon.png'} size={50}/></li>
            <li className="list-inline-item mr-4"><Avatar src={'http://www.realtor.com/realtor-com.png'} size={50}/>
            </li>
          </ul>
        </section>

        <section className="Section">
          <header className="mb-4">
            <h3 className="d-inline mr-3">Integrations</h3>
            <span className="text-muted">{client.name} integrates the following events.</span>
          </header>
          <MessageList items={state.messageList}/>
        </section>

      </div>

    </div>
  )
});
views.add('view connections', () => {
  const message = state.messageList[0];
  return (
    <Flex px={2}>
      <Box col={12}>
        <PageHeader heading={'Active Connections'} mb={1}/>
        <Box gutter={2}>
          <MessageList items={state.messageList} showClients={true}/>
        </Box>
      </Box>
    </Flex>
  )
});


views.add('signup', () => {
  return (
    <BaseStyles>
      <Signup style={{maxWidth: '300px'}}/>
    </BaseStyles>
  )
});
