import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {Avatar, Card, Container, ClientCard, CardList, CardListItem, Button} from '../src/components';
import '../src/style/index.css';
import './stories.css';
import BaseStyle from './BaseStyles';
import {clientList} from './storydata';

const avatar = (<Avatar size={50} src="smarter-agent-icon.png"/>);
const heading = (<h3>Smarter Agent</h3>);
const footer = (
  <div className="d-flex">
    <Button primary>click me</Button>
  </div>
);

const story = storiesOf('Cards', module);

story.add('example', () => {
  return (
    <BaseStyle>
      <div className='container'>
        <ClientCard
          name="Smarter Agent"
          description="Making real estate smarter again..."
          footer={footer}
        />
      </div>
    </BaseStyle>
  )
});

story.add('card list', () => {
  let cards = clientList.map(client => <CardListItem><ClientCard {...client}/></CardListItem>);
  return (
    <BaseStyle>
      <Container className="container">
        <CardList>
          {cards}
        </CardList>
      </Container>
    </BaseStyle>
  )
});

export default story;
