import styled from 'styled-components'
import {colors} from '../style/config';

const Button = styled.button`
    position: relative;
    background-color: #fff;
    border: solid 1px transparent;
    display: inline-block;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.25;
    padding: .5rem 1rem;
    text-align: center;
    vertical-align: middle;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    border-radius: 4px;
    margin-right: .5em;
    &:hover {
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
    ${props => props.primary &&
      `background-color: ${colors.primary}; color: white;` }
`

export default Button;
