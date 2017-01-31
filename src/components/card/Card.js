import React from 'react';
import styles from '../../style/config';
import './card.css';

export function Card({
  avatar,
  backgroundColor,
  children,
  color,
  footer,
  subtitle,
  text,
  title,
  ...props
}) {
  let cardStyle = {};
  if(backgroundColor) {
    cardStyle.backgroundColor = styles.colors[backgroundColor] || backgroundColor;
  }
  if(color) {
    cardStyle.color = styles.colors[color] || color;
  }
  return (
    <div className={'card Card'} style={cardStyle}>

      {avatar &&
      <div className="card-block text-center">
        {avatar}
      </div>
      }

      <div className="card-block">
        {title &&
        <h3 className="card-title">{title}</h3>
        }

        {subtitle &&
        <h6 className="card-subtitle">{subtitle}</h6>
        }

        {text &&
        <p className="card-text">{text}</p>
        }
      </div>

      {footer &&
      <div className="card-footer">
        {footer}
      </div>
      }
      {children}
    </div>
  )
}

Card.propTypes = {
  backgroundColor: React.PropTypes.string,
  color:           React.PropTypes.string,
  title:           React.PropTypes.string,
  text:            React.PropTypes.string,
  avatar:          React.PropTypes.node,
  footer:          React.PropTypes.node,
}

export default Card
