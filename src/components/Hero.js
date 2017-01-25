import React from 'react';

export const Hero = ({
  header,
  footer,
  title,
  text,
  logo,
  styles = {}
}) => {
  let logoStyles = {
    width: '120',
    marginBottom: '3em'
  };
  let heroStyles = {
    textAlign: 'center'
  };
  return (
    <div className="jumbotron" style={{...heroStyles, ...styles.hero}}>
      {header}
      <img src={logo} alt="" style={logoStyles}/>
      <h1 className="display-3" style={styles.title}>{title}</h1>
      <p className="lead" style={styles.text}>{text}</p>
      {footer &&
        <div className="footer mb-0 mt-5">
          {footer}
        </div>
      }
    </div>
  )
};

Hero.propTypes = {
  "header": React.PropTypes.node,
  "footer": React.PropTypes.node,
  "title":  React.PropTypes.string,
  "text":   React.PropTypes.string,
  "logo":   React.PropTypes.string,
  "styles": React.PropTypes.object,
};

export default Hero
