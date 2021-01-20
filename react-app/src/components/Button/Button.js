import { theme } from './../../util/Theme'
import styled from 'styled-components'

export const Button = styled.button`
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
  padding: .8rem;
  margin-left: -1.3rem;
  cursor: pointer;
  background-color: ${theme.primaryLightHex};
  color: white;
  border: none;
  outline: none;
  font-family: 'Kontrapunkt Bold', Verdana, sans-serif;
  box-shadow: 0 0 0 rgba(0,0,0,0.1);
  transition: box-shadow .15s ease-in-out;
  grid-area: button;
  justify-self: flex-start;
  align-self: end;

  &:disabled {
    cursor: not-allowed;
    background-color: lightgrey;
  }

  &:active,
  &:hover {
    box-shadow: 0 2px 2px rgba(0,0,0,0.2);
  }
  
  @media screen and (max-width: 400px) {
    border-radius: 5rem;
    width: 5rem;
    margin: 1rem auto;
    box-sizing: border-box;
  }
`
