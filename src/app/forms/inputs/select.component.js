import React from 'react'
import {Scoped} from 'kremling'

export default class Select extends React.Component {
  state = {
    value: this.props.data[this.props.dataKey],
  }
  render() {
    return (
      <Scoped css={css}>
        <div>
          <div className="select-label">
            {this.props.label}
          </div>
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
      </Scoped>
    )
  }
  handleChange = evt => {
    const value = evt.target.value
    this.setState({value}, () => {
      this.props.setData(this.props.dataKey, value)
    })
  }
}

const css = `
  & .select-label {
    margin-bottom: 8rem;
  }
`
