import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {addWithInfo} from '@kadira/react-storybook-addon-info';
import {ClientCardList, Splash, Hero, MessageList, Switch, Avatar} from '../src/components';
import {Section, SectionHeader} from 'rebass';
import state from './storydata';
import '../src/style/index.css';
import './stories.css';
window.state = state;


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
  return (
    <div className="container-fluid">
      <Hero
        title="reflexConnect"
        text="Select a vendor from the list below to start connecting your business tools."
        logo={"bhhs-logo-dark.png"}
      />

      <div className="container">
        <ClientCardList
          items={state.clientList}
        />
      </div>

    </div>
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
            <h3 className="d-inline mr-3">Integrations</h3>
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

connecting.add('connection activity', () => {
  const message = state.messageList[0];
  return (
    <div className="container">
      <Section>
        <SectionHeader
          heading="Connected Apps"
          description={"You've authorized access to one or more messages for these apps and sites."}
        />
        <ul className="list-inline">
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
      </Section>


      <section className="Section">
        <header className="mb-4">
          <h3 className="d-inline mr-3">Your activity</h3>
        </header>
        <MessageList items={state.messageList}/>
      </section>

    </div>
  )
});

// ELEMENTS
//
const elements = storiesOf('design elements', module);

elements.addWithInfo('Hero', 'Marketing content prominently displayed at the top of a page.', () => {
  return (
    <Hero
      title="My Title"
      text={"A brief introduction..."}
    />
  )
});

elements.addWithInfo('Card', 'Basic visual list unit', () => {
  let client = state.client;
  return (
    <Card
      title={client.name}
      text={client.description}
    />
  )
})
