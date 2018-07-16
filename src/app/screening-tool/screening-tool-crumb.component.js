import React from 'react'
import {Route} from 'react-router-dom'
import Breadcrumb from '../breadcrumb.component.js'

export default class ScreeningToolCrumb extends React.Component {
  render() {
    const areYouEligibleRoute = this.props.match.url + '/are-you-eligible'
    return (
      <Route
        path={areYouEligibleRoute}
        render={() => (
          <Breadcrumb
            name="Step 1: Are you eligible?"
            url={areYouEligibleRoute}
          />
        )}
      />
    )
  }
}
