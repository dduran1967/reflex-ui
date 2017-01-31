import styled from 'styled-components';
import {colors} from '../style/config';

const Toolbar = styled.div`
  display:         flex;
  flex-direction:  row;
  flex-wrap:       nowrap;
  flex-shrink:     0;
  align-items:     center;
  align-self:      stretch;
  height:          64px;
  margin:          0;
  padding:         0 0 0 56px;
  color:           ${colors.navColor};
  backgroundColor: ${colors.navBackgroundColor};
`
export const ToolbarItem = styled.div`
  padding: .5em 1em;
`;

export default Toolbar
