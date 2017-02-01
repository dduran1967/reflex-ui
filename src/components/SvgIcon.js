import React from 'react';

const namedPaths = {
  blank:  {},
  home:   {
    d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
  },
  close:  {
    d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
  },
  search: {
    d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
  },
  user:   {
    d: "M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"
  },
  connect: {
    d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
  },
  dashboard: {
    d: "M12.984 3h8.016v6h-8.016v-6zM12.984 21v-9.984h8.016v9.984h-8.016zM3 21v-6h8.016v6h-8.016zM3 12.984v-9.984h8.016v9.984h-8.016z"
  },
  history: {
    d: "M15 1.5c5.799 0 10.5 4.701 10.5 10.5s-4.701 10.5-10.5 10.5v-2.25c2.204 0 4.275-0.858 5.834-2.416s2.416-3.63 2.416-5.834c0-2.204-0.858-4.275-2.416-5.834s-3.63-2.416-5.834-2.416c-2.204 0-4.275 0.858-5.834 2.416-1.199 1.199-1.982 2.701-2.281 4.334h4.364l-5.25 6-5.25-6h3.857c0.728-5.088 5.103-9 10.393-9zM19.5 10.5v3h-6v-7.5h3v4.5z"
  },
  menu: {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  }
}


function SvgIcon({
  backgroundColor,
  color,
  height,
  name,
  width,
  size,
  viewBox,
  ...props
}) {
  return (
    <span className="svg-icon" {...props}>
      <svg
        fill={color}
        height={height}
        width={width}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg">
        {true &&
        <path {...namedPaths[name]} />
        }
        <path d="M0 0h24v24H0z" fill={backgroundColor}/>
      </svg>
    </span>
  )
}

SvgIcon.propTypes = {
  backgroundColor: React.PropTypes.string,
  color:           React.PropTypes.string,
  height:          React.PropTypes.string,
  name:            React.PropTypes.oneOf(Object.keys(namedPaths)),
  path:            React.PropTypes.string,
  width:           React.PropTypes.string,
  size:            React.PropTypes.string,
  viewBox:         React.PropTypes.string,
}

SvgIcon.defaultProps = {
  backgroundColor: 'none',
  color:           'currentColor',
  height:          '24',
  width:           '24',
  viewBox:         '0 0 24 24',
  name:            'blank',
}

export default SvgIcon;