import React from 'react'
import { CreateModalPortal } from './../util/CreateModalPortal'
import { ModalBackground } from './Modal/Background'
import { ModalContent } from './Modal/Content'
import { theme } from './../util/Theme'

export class ExposureModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hideModal: false
    }
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
    setTimeout(() => this.props.setPersonId(0), theme.fadeOutTime)
    this.setState(_state => ({
      hideModal: true,
    }))
  }

  render() {
    const animationsSpeed = theme.fadeOutTime / 1000;

    return (
      this.props.personId &&
        <CreateModalPortal>
          <ModalBackground
            onClick={this.closeModal}
            animationSpeed={animationsSpeed}
            fadeOut={this.state.hideModal}></ModalBackground>
          <ModalContent
            personId={this.props.personId}
            animationSpeed={animationsSpeed}
            handleButtonClick={this.closeModal}
            slideToAbove={this.state.hideModal} />
        </CreateModalPortal>
    )
  }
}
