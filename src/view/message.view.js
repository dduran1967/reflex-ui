import React from 'react';
import {observer} from 'mobx-react';
import {Section, SectionHeader} from '../components';

class MessageView extends React.Component {
  render() {
    const {message} = this.props
    return (
      <div>
        <Section>
          <h4>{message.name}</h4>
          {message.description}
        </Section>
      </div>
    )
  }
}

export default observer(MessageView);