import React from 'react';
import {observer} from 'mobx-react';
import messages from '../store/message';
import {PageHeader, Section, SectionHeader} from '../components';

class MessageView extends React.Component {
  render() {
    let {params = {}} = this.props;
    let messageId = params.messageId;
    let message = messages.get(messageId);
    return (
      <div className="container">
        <PageHeader heading={message.name} description={message.description}/>
        <div className="row">
          <div className="col-6">
            <Section>
              <SectionHeader heading="details"/>
              <pre>{ JSON.stringify({message}, null, 1) }</pre>
            </Section>

          </div>
        </div>
      </div>
    )
  }
}

export default observer(MessageView);