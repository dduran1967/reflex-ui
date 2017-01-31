import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {Switch, Hero} from '../src/components';
import Rebass from 'rebass'


storiesOf('Components', module)
.add('switch', () => {
  return <Switch checked={false}/>
});


