import React from 'react';

export function MessageListItem({name, description, ...props}) {
  return (
    <div className="media w-100 border">
      <div className="media-body">
        <h4 className="media-heading">{name}</h4>
        {description}
      </div>
    </div>
  )
}

export class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.items = props.items.map(item => <div className="list-group-item"><MessageListItem {...item}/></div>)
  }

  render() {
    return (
      <div className="list-group">
        {this.items}
      </div>
    )
  }
}

export const Message = () => {
  return (
    <h1>Message</h1>
  )
}

export default Message
