import React from 'react'
import moment from 'moment';
import RenderPage from '../render-page.component.js'
import PositionedString from '../pdf-rendering/positioned-string.component.js'
import PositionedCheckmark from '../pdf-rendering/positioned-checkmark.component.js'

export default class PetitionForConviction_Pdf extends React.Component {
  render() {
    const {data, renderData} = this.props

    return (
      <>
        <RenderPage url="/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-1.png">
          <PositionedString debugKey="name" left={farLeft} top="14.06%">
            {`${renderData('person.firstName')} ${renderData('person.middleName')} ${renderData('person.lastName')}`}
          </PositionedString>
          <PositionedString dataKey="person.addressStreet" left={farLeft} top="17.67%" />
          <PositionedString debugKey="lineAddress" left={farLeft} top="20.90%">
            {`${renderData('person.addressCity')} ${renderData('person.addressState')} ${renderData('person.addressZip')}`}
          </PositionedString>
          <PositionedString dataKey="person.dayPhone" left={farLeft} top="24.75%" />
          <PositionedString dataKey="person.email" left={farLeft} top="28.3%" />
          <PositionedCheckmark debugKey="petitionerRepresentingThemself" left={petRepLeft} top="31.75%" shouldShow={data.person.petitionerRepresentative === 'petitioner'} />
          <PositionedCheckmark debugKey="petitionerHasAttorney" left={petRepLeft} top="33.25%" shouldShow={data.person.petitionerRepresentative === 'attorney'} />
          <PositionedString dataKey="person.barNumber" left={barNumberLeft} top="33.15" />
          <PositionedString debugKey="addressCourt" left="27.8%" top="43.6%">
            {`${renderData('case.addressCourtStreet')}, ${renderData('case.addressCourtCity')}, ${renderData('case.addressCourtState')} ${renderData('case.addressCourtZip')}`}
          </PositionedString>
          <PositionedString debugKey="petitionerName" left="11.9%" top="53%">
            {`${renderData('person.firstName')} ${renderData('person.middleName')} ${renderData('person.lastName')}`}
          </PositionedString>
          <PositionedString dataKey="case.caseNumber" left="54.1%" top="53%" />
          <PositionedString dataKey="case.judgeName" left="54.1%" top="58%" />
          <PositionedString dataKey="case.caseNumber" debugKey="caseNumberConviction" left="17.4%" top="65.8%" />
          <PositionedString dataKey="case.publicInterest" left="17.4%" top="79%" style={{width: '74%', height: '15%', lineHeight: '30px', overflowY: 'hidden'}} />
        </RenderPage>
        <RenderPage url="/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-2.png">
          <PositionedString debugKey="todaysDate" left="54.4%" top="39.7%">
            {moment().format('L')}
          </PositionedString>
          <PositionedString debugKey="printedName" left="54.4%" top="39.7%">
            {`${renderData('person.firstName')} ${renderData('person.middleName')} ${renderData('person.lastName')}`}
          </PositionedString>
        </RenderPage>
      </>
    )
  }
}

const farLeft = `11.28%`
const petRepLeft = `20.82%`
const barNumberLeft = `62.2%`
