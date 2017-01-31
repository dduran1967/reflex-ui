const monospace = '"Roboto Mono", Menlo, Consolas, monospace'

const baseColors = {
  white:        '#fff',
  black:        '#000',
  red:          '#d9534f',
  orange:       '#f0ad4e',
  yellow:       '#ffd500',
  green:        '#5cb85c',
  blue:         '#0275d8',
  teal:         '#5bc0de',
  pink:         '#ff5b77',
  purple:       '#552448',
  grayDark:     '#292b2c',
  gray:         '#464a4c',
  grayLight:    '#636c72',
  grayLighter:  '#ebedee',
  grayLightest: '#f7f7f9',
}

export const colors = {
  ...baseColors,
  primary:            baseColors.blue,
  secondary:          baseColors.midgray,
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
  109,
  68,
  42,
  26,
  16,
  14,
  12
]

export const fontSize = {
  normal: 1,
  medium: 1,
  large:  1.618,
  larger: 2.618,
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

export const PageHeader = {
  display:           'flex',
  flexWrap:          'wrap',
  alignItems:        'center',
  paddingTop:        scale[2],
  paddingBottom:     scale[2],
  marginTop:         scale[0],
  marginBottom:      scale[2],
  paddingLeft:       scale[2],
  borderBottomWidth: 2,
  borderBottomStyle: 'solid',
  borderColor:       borderColor
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
  Button,
  PageHeader
}