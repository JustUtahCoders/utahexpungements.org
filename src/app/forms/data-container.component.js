import React from 'react'

export default class DataContainer extends React.Component {
  state = {}
  render() {
    return this.props.children({data: this.state, renderData: this.renderData, setData: this.setData})
  }
  setData = (key, value) => {
    this.setState({[key]: value})
  }
  renderData = key => {
    return this.state[key] || ''
  }
}
