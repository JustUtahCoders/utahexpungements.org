import React from 'react'
import {getClassname} from './data-key.helpers.js'
import {DataContainerContext} from '../data-container.component.js'
import {get} from 'lodash'

export default class Checkmark extends React.Component {
  render() {
    if (typeof this.props.shouldShow !== 'undefined' && !this.props.shouldShow) {
      return null
    }

    return (
      <DataContainerContext.Consumer>
        {(dataContainerContext) => {
          const shouldShow = typeof this.props.shouldShow !== 'undefined' ? this.props.shouldShow : get(dataContainerContext, `data.${this.props.dataKey}`, false)
          return shouldShow && (
            <div className={getClassname(this.props.dataKey)}>
              {'\u2714'}
            </div>
          )
        }}
      </DataContainerContext.Consumer>
    )
  }
}
