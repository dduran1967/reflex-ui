import styled from 'styled-components';

const Drawer = styled.div`
  position:         relative;
  left:             ${props => props.open ? '0' : '-280px'}
  display:          inline-block;
  width:            ${props => props.open ? '280px' : '0'}
  height:           100vh;
  background-color: #444;
  flex-direction:   column;
  flex-shrink:      0;
  z-index:          100;
  transition: all .2s ease-in-out;
`

export const DrawerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  height: 151px;
  background-color: #37474f;
  color: white;
`


export default Drawer;