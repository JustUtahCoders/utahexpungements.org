import React from 'react'
import RenderPage from '../render-page.component.js'
import PositionedString from '../pdf-rendering/positioned-string.component.js'

export default class PetitionForDrugConviction_Pdf extends React.Component {
  render() {
    const {renderData, data} = this.props
    return (
      <>
        <RenderPage url="/static/forms/petition-for-drug-conviction/01_Petition_to_Expunge_Records_Criminal-drug_possession-1.png">
          <PositionedString debugKey="name" left="11%" top="13.94%">
            {renderData('person.firstName')} {renderData('person.lastName')}
          </PositionedString>
          <PositionedString dataKey="person.addressStreet" left="11%" top="17.5%" />
          <PositionedString debugKey="city-state-zip" left="11%" top="20.91%">
            {renderData('person.addressCity')}{data.person.addressCity ? ', ' : ''} {renderData('person.addressState')} {renderData('person.addressZip')}
          </PositionedString>
          <PositionedString dataKey="person.homePhone" left="11%" top="24.71%" />
          <PositionedString dataKey="person.email" left="11%" top="27.91%" />
        </RenderPage>
        <RenderPage url="/static/forms/petition-for-drug-conviction/01_Petition_to_Expunge_Records_Criminal-drug_possession-2.png">
        </RenderPage>
      </>
    )
  }
}
