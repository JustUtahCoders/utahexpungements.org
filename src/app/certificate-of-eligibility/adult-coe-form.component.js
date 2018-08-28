import React from 'react'
import ApplicationForCOE_Web from '../forms/application-for-coe/application-for-coe.web.component.js'
import ApplicationForCOE_Pdf from '../forms/application-for-coe/application-for-coe.pdf.component.js'
import DataContainer from '../forms/data-container.component.js'

export default class AdultCoeForm extends React.Component {
  render() {
    return (
      <DataContainer>
        {props => (
          <>
            <ApplicationForCOE_Web {...props} />
            <ApplicationForCOE_Pdf {...props} />
          </>
        )}
      </DataContainer>
    )
  }
}
