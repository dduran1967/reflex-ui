import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {Flex, Heading, Text, Box, Block, Container, Grid} from '../src/components';
import '../src/style/index.css';
import './stories.css';
import data from './storydata'
import styles from '../src/style/config'
import BaseStyle from './BaseStyles';
const story = storiesOf('Type', module);

story.add('Typeography', () => {
  let heading = data.headingText[0];
  let body = data.bodyText[0];
  let content = styles.fontSizes.map((size,index)=>{
    return (
      <Block>
        <Heading size={index}>h{index+1} Heading - ({size}px)</Heading>
        <p>{body}</p>
      </Block>
    )
  })
  return (
    <BaseStyle>
      <Container>
        <Heading size="xl">Heading h1 {styles.fontSizes[1]}px</Heading>
        <p>{body}</p>

        <Heading size="large">Heading h2 {styles.fontSizes[2]}px</Heading>
        <p>{body}</p>

        <Heading size="normal">Heading h3 {styles.fontSizes[3]}px</Heading>
        <p>{body}</p>

        <Heading size="small">Heading h4 {styles.fontSizes[4]}px</Heading>
        <p>{body}</p>

        <Heading size="smaller">Heading h5 {styles.fontSizes[5]}px</Heading>
        <p>{body}</p>

        <Heading size={6}>Heading h6 {styles.fontSizes[6]}px</Heading>
        <p>{body}</p>
      </Container>
    </BaseStyle>
  )
});

story.add('Stylesheet',()=>(
  <BaseStyle>
    <Container>
      <h1>Heading h1</h1>
      <p>{data.bodyText[0]}</p>

      <h2>Heading h2</h2>
      <p>{data.bodyText[0]}</p>

      <h3>Heading h3</h3>
      <p>{data.bodyText[0]}</p>

      <h4>Heading h4</h4>
      <p>{data.bodyText[0]}</p>

      <h5>Heading h5</h5>
      <p>{data.bodyText[0]}</p>

      <h6>Heading h6</h6>
      <p>{data.bodyText[0]}</p>

    </Container>
  </BaseStyle>
))

export default story;