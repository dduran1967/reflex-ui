export function compose() {
  return Object.assign({}, arguments);
}

export const settings = {};

export const layout = {
  gridUnitValue: 1,
  gridUnitType:  'rem'
};

export const typography = {};

export const color = {
  brandPrimary: '#552448',
  success:      '#5cb85c',
  info:         '#5bc0de',
  warning:      '#f0ad4e',
  danger:       '#d9534f',
};

export const card = {
  position:        'relative',
  display:         'block',
  marginBottom:    '1rem',
  backgroundColor: 'inherit',
  border:          '1px solid #333',
}

export const toolbar = {
  boxSizing:       'border-box',
  display:         'flex',
  flexDirection:   'row',
  height:          '64px',
  lineHeight:      '64px',
  textAlign:       'center',
  backgroundColor: '#552448',
  paddingLeft:     '16px',
  paddingRight:    '16px',
  color:           '#EAE3D4'
};

export const toolbarItem = {
  height: toolbar.height
};

export const icon = {
  display:             'inline-block',
  fontStyle:           'normal',
  fontVariant:         'normal',
  fontWeight:          'normal',
  fontSize:            '24px',
  lineHeight:          '1',
  textTransform:       'none',
  letterSpacing:       'normal',
  wordWrap:            'normal',
  whiteSpace:          'nowrap',
  direction:           'ltr',
  fontStretch:         'normal',
  overflow:            'hidden',
  textAlign:           'center',
  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
};

export default {
  compose,
  color,
  icon,
  toolbar,
  layout,
  typography
};


