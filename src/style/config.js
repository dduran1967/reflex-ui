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
  grayLighter:  '#eceeef',
  grayLightest: '#f7f7f9',
}

const colors = {
  ...baseColors,
  primary:   baseColors.purple,
  secondary: baseColors.midgray,
  default:   baseColors.black,
  info:      baseColors.teal,
  success:   baseColors.green,
  warning:   baseColors.orange,
  error:     baseColors.red
}

const inverted = colors.white

const scale = [
  0,
  8,
  16,
  32,
  64
]

const fontSizes = [
  48,
  32,
  24,
  20,
  16,
  14,
  12
]

const zIndex = [
  0,
  2,
  4,
  8,
  16
]

const bold = 600
const borderRadius = 2
const borderColor = 'rgba(0, 0, 0, .25)'

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
}

const config = {
  scale,
  fontSizes,
  bold,
  monospace,
  zIndex,
  colors,
  inverted,
  borderRadius,
  borderColor,
  pureRender: true,
  Icon
}

export default config;


