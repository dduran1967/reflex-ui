import styled from 'styled-components';

export const Container = styled.div`
  width:    100%;
  maxWidth: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const Flexbox = styled.div`
  display: flexbox
`;

export const Row = styled.div`
  display: flexbox;
  flex-direction: row;
  justified: {this.props.justified? : this.props.justified : 'default'}
`;

export const Column = styled.div`
  display: flexbox;
  flex-direction: column;
  justified: {this.props.justified? : this.props.justified : 'default'}
`;

export default {
  Flexbox,
  Row,
  Column,
  Container
}