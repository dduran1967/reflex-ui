import React from 'react';
import {Heading as _Heading} from 'rebass';

const Heading = ({size = 3, children, ...props}) => {

  let _size;
  switch(size){
    case "larger":
    case "xl":
    case "1":
      _size = 1;
      break;
    case "small":
      break;
  }

  let sizeMap = {
    'xl':      1,
    'large':   2,
    'normal':  3,
    'small':   4,
    'smaller': 5
  };

  return (
    <_Heading size={sizeMap[size]}>{children}</_Heading>
  )
};

export default Heading;
