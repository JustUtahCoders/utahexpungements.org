import React from 'react'
import {Scoped} from 'kremling'

export default class Checkbox extends React.Component {
  state = {
    value: this.props.data[this.props.dataKey]
  }
  render() {
    return (
      <Scoped css={css}>
        <div className="web-form-input">
          <label>
            <input
              type="checkbox"
              checked={this.state.value}
              onChange={evt => this.setState({value: evt.target.value})}
              onBlur={this.handleBlur}
            />
            {this.props.label}
          </label>
        </div>
      </Scoped>
    )
  }
  handleBlur = () => {
    this.props.setData(this.props.dataKey, this.state.value)
  }
}

const css = `
  .checkbox {
    margin-left: 32rem;
  }
`
