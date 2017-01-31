import React from 'react';
import {Heading, Block} from './index';

export const Hero = ({
  header,
  footer,
  title,
  text,
  logo,
  styles = {}
}) => {
  let logoStyles = {
    width:        '120px',
    marginBottom: '3em'
  };
  let heroStyles = {
    textAlign:       'center',
    backgroundColor: '#d3d3d7',
    borderRadius:    '8px'
  };
  return (
    <Block mt={0} mb={3} px={2} py={4} style={{...heroStyles, ...styles.hero}}>
      {header}
      <img src={logo} alt="" style={logoStyles}/>
      <Heading size={0}>{title}</Heading>
      <p>{text}</p>
      {footer &&
      <div className="footer mb-0 mt-5">
        {footer}
      </div>
      }
    </Block>
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
