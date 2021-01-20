import { theme } from './../../util/Theme'
import styled from 'styled-components'

export const ModalBackground = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1 / span 3;
  background-color: rgb(${theme.primaryColorRgb});
  opacity: 1;
  max-height: 100%;
  background: radial-gradient(circle, rgba(${theme.primaryColorRgb},0.65) 60%,
    rgba(${theme.primaryColorRgb},0.55) 85%);
  transition: opacity ${props => props.animationSpeed}s ease-in-out;
  overflow: hidden;
  animation-name: fade-in;
  animation-duration: ${props => props.animationSpeed}s;
  animation-iteration-count: 1;
  ${props => props.fadeOut && `
    opacity: 0;
  `}
`
