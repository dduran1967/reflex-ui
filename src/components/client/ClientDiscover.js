import React from 'react';
import {Hero, ClientCard} from '../index';
import store from '../../store'

export const ClientDiscover = ({user, client, styles, ui, ...props}) => {
  return (
    <div id="client_discover_main">
      <Hero
        title="reflex:Connect"
        text="Connect and integrate your business in seconds."
      />
      <div className="container">
        <h2>Getting started</h2>
        <p>These apps are pre-integrated with reflex.  To get started, select your vendor from the list below.</p>
        <div className="card-columns">
          {getCards()}
        </div>
      </div>
    </div>
  )
};

function getCards() {
  return store.client.list().map((client)=>ClientCard)
}

export default ClientDiscover;
