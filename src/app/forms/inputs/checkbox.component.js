import React from 'react'
import {Scoped} from 'kremling'
import {get} from 'lodash'

export default class Checkbox extends React.Component {
  state = {
    value: get(this.props.data, this.props.dataKey, false)
  }
  render() {
    return (
      <Scoped css={css}>
        <div className="web-form-input">
          <label>
            <input
              type="checkbox"
              checked={this.state.value}
              onChange={evt => this.setState({value: evt.target.checked})}
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
  & .checkbox {
    margin-left: 32rem;
  }
`
