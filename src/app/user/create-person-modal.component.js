import React from 'react'
import Modal from '../utils/modal.component.js'

export default class CreatePersonModal extends React.Component {
  render () {
    const { close } = this.props
    return (
      <Modal
        close={close}
      >
      </Modal>
    )
  }
}
