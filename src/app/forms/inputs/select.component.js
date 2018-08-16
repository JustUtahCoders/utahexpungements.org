import React from 'react'

export default class Select extends React.Component {
  state = {
    value: this.props.data[this.props.dataKey],
  }
  render() {
    return (
      <div>
        {this.props.label}
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="nothingSelected">
            Please select an option
          </option>
          {this.props.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
  handleChange = evt => {
    const value = evt.target.value
    this.setState({value}, () => {
      this.props.setData(this.props.dataKey, value)
    })
  }
}
