import React from 'react'
import {Route} from 'react-router-dom'
import AdultCOEForm from './adult-coe-form.component.js'
import COEOverview from './coe-overview.component.js'

export default class CertificateOfEligibility extends React.Component {
  render() {
    return (
      <>
        <Route
          path={this.props.match.url}
          exact
          component={COEOverview}
        />
        <Route
          path={this.props.match.url + '/adult-coe-form'}
          component={AdultCOEForm}
        />
      </>
    )
  }
}
