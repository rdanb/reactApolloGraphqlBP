import { theme } from './../../util/Theme'
import styled from 'styled-components'

export const CloseButton = styled.button`
  width: 1rem;
  height: 1rem;
  padding: 0;
  border: none;
  background: none;
  color: rgb(${theme.primaryColorRgb});
  transition: transform .05s ease-in-out;
  top: 1rem;
  right: 1rem;
  position: absolute;

  &:focus,
  &:active {
    border: none;
    outline: none;
  }

  &:active {
    transform: translateY(3px);
  }
`
