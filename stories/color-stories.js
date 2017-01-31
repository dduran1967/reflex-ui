import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {Flex, Card, Block, CardList, CardListItem, Container} from '../src/components';
import '../src/style/index.css';
import './stories.css';
import {colors} from '../src/style/config';
import BaseStyle from './BaseStyles';

const colorCard = (name, value) => (
  <Card p={0} mx={1} backgroundColor={value}>
    <Block p={1} backgroundColor={'white'} style={{margin: '80px 0 0 0'}}>
      <small>{name}: {value}</small>
    </Block>
  </Card>
);

const story = storiesOf('Color', module);

story.add('basic colors', () => {
  return (
    <BaseStyle>
      <Container className="container">
        <Card
          backgroundColor={'success'}
          text="success"
          color="white"
        />

        <Card
          backgroundColor={'info'}
          text="info"
          color="white"
        />


        <Card
          backgroundColor={'warning'}
          text="warning"
          color="white"
        />

        <Card
          backgroundColor={'danger'}
          text="danger"
          color="white"
        />


        <Card
          backgroundColor={'primary'}
          text="primary"
          color="white"
        />

      </Container>
    </BaseStyle>
  )
});

export default story;
