import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Modal } from './Modal'

const EXPOSURE_FACTORS = gql`
  query GetExposureFactors($personId: Float!) {
    exposure(personId: $personId) {
      val3
      val5
    }
  }
`

const closeButton = ``

export class ExposureModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalBackgroundClassName: 'modalBackground',
      modalCloseButtonClassName: 'modalCloseButton',
      modalContentClassName: 'modalContent',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    setTimeout(() => this.props.setPersonId(0), 250)
    this.setState(state => ({
      modalBackgroundClassName: state.modalBackgroundClassName + ' fadeOut',
    }))
  }

  render() {
    return (
      this.props.personId &&
        <Modal>
          <div onClick={this.handleClick} className={this.state.modalBackgroundClassName}></div>
          <ModalContent className="modalContent" personId={this.props.personId} />
          <button onClick={this.handleClick} className="modalCloseButton">X</button>
        </Modal>
    )
  }
}

function ModalContent({ personId, className }) {
  const { loading, error, data } = useQuery(EXPOSURE_FACTORS, {
    variables: { personId }
  })

  return(
    <div className={className}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <h2>Exposure: {data.exposure.val3 * data.exposure.val5}</h2>}
    </div>
  )
}
