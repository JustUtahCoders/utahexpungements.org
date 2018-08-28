import React from 'react'
import {Route} from 'react-router-dom'
import COEOverview from './coe-overview.component.js'
import GovernmentForm from '../forms/government-form.component.js'
import ApplicationForCOE_Web from '../forms/application-for-coe/application-for-coe.web.component.js'
import ApplicationForCOE_Pdf from '../forms/application-for-coe/application-for-coe.pdf.component.js'

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
          render={props => (
            <GovernmentForm
              name="Application for Expungement of Adult Criminal History"
              WebForm={ApplicationForCOE_Web}
              PdfForm={ApplicationForCOE_Pdf}
            />
          )}
        />
      </>
    )
  }
}
