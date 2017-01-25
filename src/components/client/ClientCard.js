import React from 'react';
import {Avatar, Icon} from '../index';

export const ClientCard = ({
  client = {},
  styles = {}
}) => {
  let _styles = Object.assign({}, client.styles);
  return (
    <div className="card" style={_styles.card}>
      <div className="card-block">
        <div className="media">
          <Avatar
            size={50}
            name={client.name}
            src={client.icon || client.image}
          />
        </div>
      </div>
      <div className="card-block">
        <h4>{client.name}</h4>

        {client.description &&
        <p className="mb-0">{client.description}</p>
        }

      </div>
      <div className="card-footer small flex-row d-flex justify-content-between"
           style={{backgroundColor: '#000', opacity: '0.25', color: "white"}}>
        <div>
          <Icon name={'record_voice_over'}/>
          <span className="p-2">23</span>
          <Icon name={'hearing'}/>
          <span className="p-2">19</span>
        </div>
        <div>
          <Icon name={'link'}/>
          <span className="p-2">4</span>
        </div>
      </div>
    </div>
  )
};

export class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="card-columns">{this.props.items.map(this.renderCard)}</div>
  }

  renderCard(client) {
    return <ClientCard client={client}/>
  }
}

CardList.propTypes = {
  "items":  React.PropTypes.arrayOf(React.PropTypes.object),
  "styles": React.PropTypes.object,
};

export default ClientCard;
