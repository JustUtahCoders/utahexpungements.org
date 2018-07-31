import React from 'react'

export default class FormThatPrints extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children}
      </form>
    )
  }
  handleSubmit = evt => {
    evt.preventDefault()
    window.print()
  }
}
