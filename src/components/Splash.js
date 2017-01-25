import React from 'react';

let style = {
  left:            0,
  top:             0,
  height:          '100vh',
  backgroundColor: '#552448',
  color:           'white'
};

class Splash extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column text-center justify-content-around" style={style}>
        <h1 className="display-1">Splash</h1>
      </div>
    )
  }
}

export default Splash;
