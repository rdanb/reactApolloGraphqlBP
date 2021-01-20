import { theme } from './../../util/Theme'
import { CloseButton } from './CloseButton'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client'

const EXPOSURE_FACTORS = gql`
  query GetExposureFactors($personId: Float!) {
    exposure(personId: $personId) {
      val3
      val5
    }
  }
`

const ModalContentWrapper = styled.div`
  grid-column: 2;
  grid-row: 2;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  max-width: 28rem;
  min-width: ${theme.minWidth};
  padding: 1rem;
  opacity: 1;
  display: flex;
  background: ${theme.secondaryColorHex};
  align-items: center;
  justify-content: center;
  position: relative;
  animation-name: slide-from-above;
  animation-iteration-count: 1;
  animation-duration: ${props => props.animationSpeed}s;
  transition: transform ${props => props.animationSpeed}s ease-in-out,
    opacity ${props => props.animationSpeed}s ease-in-out;
  ${props => props.slideToAbove && `
    transform: translateY(-3rem);
    opacity: 0;
  `}
`

export function ModalContent({ personId, animationSpeed, slideToAbove, handleButtonClick }) {
  const { loading, error, data } = useQuery(EXPOSURE_FACTORS, {
    variables: { personId }
  })

  return(
    <ModalContentWrapper animationSpeed={animationSpeed} slideToAbove={slideToAbove}>
      <CloseButton onClick={handleButtonClick}>
        <img src="./cancel.svg" alt="close modal" />
      </CloseButton>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <h2>Exposure: {data.exposure.val3 * data.exposure.val5}</h2>}
    </ModalContentWrapper>
  )
}
