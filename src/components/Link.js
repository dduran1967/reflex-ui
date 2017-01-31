import {default as _Link} from 'react-router/Link';
import styled from 'styled-components';
import {default as styles} from '../style/config';

const Link = styled(_Link)`
  color: ${props => props.white ? 'white' : styles.colors.default};
  &:hover {
    color: ${props => props.white ? 'white' : styles.colors.default};
  }
`

export default Link;