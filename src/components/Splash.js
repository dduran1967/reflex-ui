import React from 'react';

let style = {
  left:            0,
  top:             0,
  height:          '100vh',
  backgroundImage: 'linear-gradient(-90deg, #61484A, #581330)',
  color:           'white'
};

class Splash extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column text-center justify-content-around" style={style}>
        <h1 className="display-1">{this.props.title}</h1>
        <p className="lead">{this.props.text}</p>
      </div>
    )
  }
}

export default Splash;
