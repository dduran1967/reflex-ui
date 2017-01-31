import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {Container, Button} from '../src/components';
import BaseStyle from './BaseStyles';
import '../src/style/index.css';
import './stories.css';

const stories = storiesOf('Buttons', module);

stories.add('button', () => {
    return (
        <BaseStyle>
            <div className="container">
              <Button>click me</Button>
              <Button primary>click me</Button>
            </div>
        </BaseStyle>

    )
})
