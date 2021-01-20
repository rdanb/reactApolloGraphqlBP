import { theme } from './../../util/Theme'
import styled from 'styled-components'

export const InputField = styled.input`
  border-radius: 5rem;
  height: 2.6rem;
  border: 1px solid lightgrey;
  outline: none;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 0px 2px 3px rgba(0,0,0,.1);
  font-family: 'Kontrapunkt Bold', Verdana, sans-serif;
  width: 35%;
  min-width: ${theme.minWidth};
  box-sizing: border-box;
  grid-area: input;
  align-self: end;
  justify-self: end;

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: ${theme.primaryLightHex};
  }

  @media screen and (max-width: 400px) {
    margin-top: 5rem
  }
`