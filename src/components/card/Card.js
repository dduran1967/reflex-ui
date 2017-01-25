import React from 'react';
import Avatar from 'react-avatar';
import './card.css';

export function Card({title, image, text, bgColor, cardStyle, subtitle, overlay}) {
  return (
    <div href="#" className={'card ' + bgColor} style={cardStyle}>

      {image &&
      <div className="card-block text-center">
        <Avatar src={image}/>
      </div>
      }

      {!image &&
      <div className="card-block text-center">
        <Avatar name={title}/>
      </div>
      }

      <div className="card-block">

        {title &&
        <h4 className="card-title">{title}</h4>
        }

        {subtitle &&
        <h6 className="card-subtitle">{subtitle}</h6>
        }

        {text &&
        <p className="card-text">{text}</p>
        }

      </div>

      <div className="card-footer">
        <small>somethinghere</small>
      </div>

    </div>
  )
}

export default Card
