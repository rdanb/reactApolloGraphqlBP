import React from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal-root')

export class CreateModalPortal extends React.Component {
  constructor(props) {
    super(props)
    this.wrapperElement = document.createElement('div')
    this.wrapperElement.className = 'modal-wrapper'
  }

  componentDidMount() {
    modalRoot.appendChild(this.wrapperElement)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.wrapperElement)
  }

  render() {
    return createPortal(
      this.props.children,
      this.wrapperElement,
    )
  }
}