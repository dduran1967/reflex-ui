import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import {addWithInfo} from '@kadira/react-storybook-addon-info';
import '../src/style/index.css';
import {ClientView, ClientCardList, Splash, Hero, Card, MessageList, Switch, Avatar} from '../src/components';
import state from './storydata';
window.state = state;

storiesOf('App', module)
.add('splash screen', () => (<Splash/>))

.add('discover reflex vendors', () => {
  return (
    <div className="container-fluid">
      <Hero
        title="reflexConnect"
        text="Connect & integrate your business with reflex."
        logo={"bhhs-logo-dark.png"}
      />

      <p className="lead mb-4 text-lg-center">Select a vendor from the list below to start connecting your
        business. </p>

      <div className="container">
        <ClientCardList
          items={state.clientList}
        />
      </div>

    </div>
  )
})

.add('vendor integration view', () => {
    let client = state.client;
    let footer = (
      <div>
        <Switch checked={state.user.messageClient.includes(client.id)} onClick={action('clickClient')}/>
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
              <span className="text-muted">Enabling {client.name} provides automatic integration with these systems.</span>
            </header>

            <ul className="list-inline mt-4">
              <li className="list-inline-item mr-4"><Avatar src={'http://realestatedigital.com/wp-content/themes/red-theme/images/logo.jpg'} size={50}/></li>
              <li className="list-inline-item mr-4"><Avatar src={'http://www.lwolf.com/GlobalTemplates/OfficeTemplates/LW-CompanySite/2015/images/lone-wolf-logo.svg'} size={50}/></li>
              <li className="list-inline-item mr-4"><Avatar src={'http://www.zillowstatic.com/static/images/m/apple-touch-icon.png'} size={50}/></li>
              <li className="list-inline-item mr-4"><Avatar src={'http://www.realtor.com/realtor-com.png'} size={50}/></li>
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
  })

storiesOf('components', module)
.addWithInfo('Hero', 'Marketing content prominently displayed at the top of a page.', () => {
    return (
      <Hero
        title="My Title"
        text={"A brief introduction..."}
      />
    )
  }
)

.addWithInfo('Card', 'Basic visual list unit', () => {
  let client = state.client;
  return (
    <Card
      title={client.name}
      text={client.description}
    />
  )
})
