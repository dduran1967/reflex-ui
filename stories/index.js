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
import './card-stories';
window.state = state;

export {default as Typeography} from './type-stories'
export {default as Color} from './color-stories'


const setup = storiesOf('1. first impressions', module);
setup.add('splash screen', () => (
  <div className="container-fluid">
    <Splash
      title="Make a splash"
      text={'First impressions matter.'}
    />
  </div>
));

const connecting = storiesOf('2. connecting with reflex', module);

connecting.add('finding connections', () => {
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
        <CardList>
          {clientCards}
        </CardList>
      </Container>
    </BaseStyles>
  )
});
connecting.add('starting a connection', () => {
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
            <h3 className="d-inline mr-3">Integration Events</h3>
            <span className="text-muted">{client.name} sends or receives these event messages.</span>
          </header>
          <MessageList items={state.messageList}/>
        </section>

      </div>

    </div>
  )
});
connecting.add('view connections', () => {
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


const signup = storiesOf('Signup', module);
signup.add('start', () => {
  return (
    <BaseStyles>
      <Signup style={{maxWidth: '300px'}}/>
    </BaseStyles>
  )
});
