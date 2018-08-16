import React from 'react'
import {Route} from 'react-router-dom'
import Breadcrumb from '../breadcrumb.component.js'

export default class CertificateOfEligibilityCrumb extends React.Component {
  render() {
    const baseUrl = this.props.match.url + '/certificate-of-eligibility'
    return (
      <Route
        path={baseUrl}
        render={() => (
          <Breadcrumb
            name="Step 2: Certificate of Eligibility"
            url={baseUrl}
            childCrumbs={
              <>
                <Route
                  path={baseUrl + '/adult-coe-form'}
                  render={() => (
                    <Breadcrumb
                      name="Fill out form"
                      url={baseUrl + '/adult-coe-form'}
                    />
                  )}
                />
                </>
            }
          />
        )}
      />
    )
  }
}
