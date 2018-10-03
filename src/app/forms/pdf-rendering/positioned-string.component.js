import React from 'react'
import {DataContainerContext} from '../data-container.component.js'
import PropTypes from 'prop-types'
import {verifyPercentage} from './position.helpers.js'

export default class PositionedString extends React.Component {
  static atLeastOneKey(props, propName, componentName) {
    if (!props.dataKey && !props.debugKey) {
      return Error(`A PositionedString was rendered with neither a dataKey or a debugKey. One of the two is required. Props given were ${JSON.stringify(props)}`)
    }
  }
  static propTypes = {
    dataKey: PositionedString.atLeastOneKey,
    debugKey: PositionedString.atLeastOneKey,
    left: verifyPercentage,
    top: verifyPercentage,
  }
  render() {
    return (
      <DataContainerContext.Consumer>
        {dataContainerContext => (
          <div data-key={this.props.dataKey || this.props.debugKey} style={{left: this.props.left, top: this.props.top, position: 'absolute'}}>
            {this.props.children || dataContainerContext.renderData(this.props.dataKey)}
          </div>
        )}
      </DataContainerContext.Consumer>
    )
  }
}
