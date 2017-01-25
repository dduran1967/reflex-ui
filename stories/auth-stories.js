import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {Splash} from '../src/components';

export default storiesOf('user accounts', module)
.add('splash screen', () => {
  return(
    <Splash
      styles={{backgroundColor: '#ccc'}}
    />
  )
});