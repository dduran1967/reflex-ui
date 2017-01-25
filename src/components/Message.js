import React from 'react';
import {Avatar} from '../components'

export class MessageList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return <div className="list-group">{this.props.items.map(this.renderItem)}</div>
  }

  renderItem(message) {
    return (
      <a href="#" className=" list-group-item list-group-item-action">
        <div className="media">
          <div className="media-body">
            <h5>{message.name}</h5>
            {message.description}
          </div>
        </div>
      </a>
    )
  }
}

export const Message = () => {
  return (
    <h1>Message</h1>
  )
}

export default Message
