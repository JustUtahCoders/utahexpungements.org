import React from 'react'
import {Route} from 'react-router-dom'
import Breadcrumb from '../breadcrumb.component.js'

export default function OverviewBasicsCrumb(props) {
  const basicsUrl = props.match.url + "/basics"
  return (
    <Route path={basicsUrl} render={routeProps => (
      <Breadcrumb
        name={__("basics crumb")}
        url={basicsUrl}
      />
    )} />
  )
}
