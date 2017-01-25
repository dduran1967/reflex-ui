import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import {ClientView, ClientDiscover} from '../src/components';
import '../src/style/index.css';

storiesOf('App', module)
.add('Discovering reflex vendors', () => {
  return (
    <ClientDiscover/>
  )
})
.add('vendor view (disabled)', () => {
    return (
      <ClientView/>
    )
  }
)
.add('integration enabled', () => {
  return (
    <ClientView/>
  )
})