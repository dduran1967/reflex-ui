import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {ClientView} from '../index';

const stories = storiesOf('ClientView',module);

stories.add('default', ()=> {
  return (
    <ClientView/>
  )
})

export default stories;


