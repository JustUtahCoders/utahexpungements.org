import React from 'react'
import {Route} from 'react-router-dom'
import FormList from './form-list.component.js'
import GovernmentForm from '../government-form.component.js'
import ApplicationForCOE_Web from '../application-for-coe/application-for-coe.web.component.js'
import ApplicationForCOE_Pdf from '../application-for-coe/application-for-coe.pdf.component.js'
import PetitionForConviction_Web from '../petition-for-conviction/petition-for-conviction.web.component.js'
import PetitionForConviction_Pdf from '../petition-for-conviction/petition-for-conviction.pdf.component.js'

export default class FormBank extends React.Component {
  render() {
    return (
      <>
        <Route
          path={this.props.match.url}
          exact
          component={FormList}
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
        <Route
          path={this.props.match.url + '/petition-for-conviction'}
          render={props => (
            <GovernmentForm
              name={__("petition conviction name")}
              WebForm={PetitionForConviction_Web}
              PdfForm={PetitionForConviction_Pdf}
            />
          )}
        />
      </>
    )
  }
}
