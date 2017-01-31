import styled from 'styled-components';

const linkColor = '#222';
const hoverColor = '#222';

export const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
`

export const ListGroupItemAction = styled.a`
  width: 100%;
  cursor: auto;
  display: flex;
  flex-direction: row;
  color: ${linkColor};
  text-align: inherit;
  text-decoration: none;
  border: solid 1px rgba(0,0,0,0.121569);
  padding: .75rem 1.25rem;
  &:hover {
    color: ${hoverColor};  
    background-color: #f7f7f9;
    text-decoration: none;
  }
  &:visited, &:active {
    text-decoration: none;
    color: ${linkColor}
  }
`

export default ListGroup;
