const monospace = '"Roboto Mono", Menlo, Consolas, monospace'

const baseColors = {
  white:        '#fff',
  black:        '#000',
  red:          '#FF4136',
  orange:       '#FF851B',
  yellow:       '#FFDC00',
  green:        '#2ECC40',
  blue:         '#0074D9',
  teal:         '#39CCCC',
  pink:         '#F012BE',
  purple:       '#B10DC9',
  grayDark:     '#292b2c',
  gray:         '#464a4c',
  grayLight:    '#636c72',
  grayLighter:  '#ebedee',
  grayLightest: '#f7f7f9',
}

export const colors = {
  ...baseColors,
  primary:            baseColors.blue,
  secondary:          baseColors.grayLight,
  default:            baseColors.black,
  info:               baseColors.teal,
  success:            baseColors.green,
  warning:            baseColors.orange,
  error:              baseColors.red,
  danger:             baseColors.red,
  navBackgroundColor: baseColors.purple,
  navColor:           baseColors.white
}

const inverted = colors.white

export const scale = [
  0,
  8,
  16,
  32,
  48,
  64
]

const fontSizes = [
  16,
  32,
  24,
  20,
  16,
  14,
  12
]

export const fontSize = {
  normal: 1,
  medium: 1.25,
  large:  1.5,
  larger: 2,
  xl:     4.236,
  xxl:    6.854,
  small:  0.875,
  xs:     0.75
}

const zIndex = [
  0,
  2,
  4,
  8,
  16
]


const bold = 600
const borderRadius = 4
const borderColor = 'rgba(0, 0, 0, .25)'

// Component Defaults

const Heading = {
  "marginTop":    "0",
  "marginBottom": ".5rem",
  "fontWeight":   "inherit",
  "lineHeight":   "1.1em"
}

const Input = {
  lineHeight: '2'
}

const Icon = {
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

const Card = {
  minWidth:      '280px',
  position:      'relative',
  display:       'inline-block',
  flexDirection: 'column'
};

const Button = {
  display:       'inline-block',
  fontWeight:    'normal',
  lineHeight:    '1.25',
  textAlign:     'center',
  verticalAlign: 'middle',
  border:        '1px solid transparent',
  padding:       '.5rem 1rem',
  margin:        '1rem',
  fontSize:      '1rem',
  boxShaddow:    '0px 5px 11px 0px rgba(0,0,0,.18)',
}


export default {
  Card,
  Icon,
  Input,
  bold,
  borderColor,
  borderRadius,
  colors,
  fontSize,
  fontSizes,
  Heading,
  monospace,
  inverted,
  scale,
  pureRender: true,
  zIndex,
  Button
}