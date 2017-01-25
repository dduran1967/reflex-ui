import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {Card} from '../src/components';
import clients from '../src/store/client';

storiesOf('Cards', module)
.add('simple card', () => {
  return Card({
    id:     'smarteragent',
    title:  'Smarter Agent',
    image:  'smarter-agent-icon.png',
    text:   'The only real estate app focused on your brand, not ours.',
    styles: {
      width: '300px'
    }
  })
})
.add('card columns', () => {
  let cards = clients.map(({id, name, image}) => {
    return (
      <Card
        id={id}
        title={name}
        image={image}
      />
    )
  });
  return (
    <div className="bg-faded pt-3">
      <div className="container-fluid card-columns">
        {cards}
      </div>
    </div>
  )
});