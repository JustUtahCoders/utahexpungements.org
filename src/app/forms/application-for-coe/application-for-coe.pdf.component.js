import React from 'react'
import RenderPage from '../render-page.component.js'
import {Scoped, a, m} from 'kremling'
import {getClassname} from '../pdf-rendering/data-key.helpers.js'
import PositionedCheckmark from '../pdf-rendering/positioned-checkmark.component.js'
import PositionedString from '../pdf-rendering/positioned-string.component.js'

export default class ApplicationForCOE_Pdf extends React.Component {
  render() {
    const {renderData, data} = this.props

    return (
      <>
        <RenderPage url="/static/forms/application-for-coe/Exp-App-7-2018-1.png" />
        <RenderPage url="/static/forms/application-for-coe/Exp-App-7-2018-2.png">
          <Scoped css={css}>
            <PositionedString debugKey="personName" left="11.5%" top={line1Top} style={{display: 'flex', justifyContent: 'space-around', width: '55.47%'}}>
              <div>
                {renderData('person.lastName')}
              </div>
              <div>
                {renderData('person.firstName')}
              </div>
              <div>
                {renderData('person.middleName')}
              </div>
            </PositionedString>
            <PositionedString dataKey="person.birthday" left="81.76%" top={line1Top} />
            <PositionedString dataKey="person.previouslyUsedNames" left="42.88%" top="19.82%" />
            <PositionedString debugKey="mailingAddress" left="22.88%" top="22.73%">
              {`${renderData('person.addressStreet')}, ${renderData('person.addressCity')}, ${renderData('person.addressState')} ${renderData('person.addressZip')}`}
            </PositionedString>
            <PositionedString dataKey="person.socialSecurity" left="21.18%" top={line4Top} />
            <PositionedString dataKey="person.driversLicenseNumber" left="65.06%" top={line4Top} />
            <PositionedString dataKey="person.driversLicenseState" left="85.00%" top={line4Top} />
            <PositionedString dataKey="person.homePhone" left="25.71%" top={line5Top} />
            <PositionedString dataKey="person.dayPhone" left="66.65%" top={line5Top} />
            <PositionedCheckmark dataKey="case.isTrafficExpungement" left="4.76%" top="31.6%" />
            <PositionedCheckmark dataKey="case.isAcquittalExpungement" left="4.76%" top="34.22%" />
            <PositionedString debugKey="nameOfPetitioner" left="6.05%" top="40.7%">
              {renderData('person.firstName')} {renderData('person.lastName')}
            </PositionedString>
            <PositionedCheckmark debugKey="check" left="5.90%" top="53.60%" shouldShow={data.paymentMethod === 'check'} />
            <PositionedCheckmark debugKey="creditCard" left="5.90%" top={creditCardTop} shouldShow={data.paymentMethod === 'creditCard'} />
            <PositionedCheckmark debugKey="visa" left="36.82%" top={creditCardTop} shouldShow={data.paymentMethod === 'creditCard' && data.creditCardIssuer === 'visa'} />
            <PositionedCheckmark debugKey="mastercard" left="42.00%" top={creditCardTop} shouldShow={data.paymentMethod === 'creditCard' && data.creditCardIssuer === 'mastercard'} />
            <PositionedCheckmark debugKey="discover" left="51.12%" top={creditCardTop} shouldShow={data.paymentMethod === 'creditCard' && data.creditCardIssuer === 'discover'} />
            <PositionedCheckmark debugKey="amex" left="59.41%" top={creditCardTop} shouldShow={data.paymentMethod === 'creditCard' && data.creditCardIssuer === 'amex'} />
            {data.paymentMethod === 'creditCard' && this.creditCardInfo()}
            {data.paymentMethod === 'creditCard' &&
              <PositionedString dataKey="nameOnCard" left="30.71%" top={nameOnCardTop} />
            }
            {data.paymentMethod === 'creditCard' &&
              <PositionedString dataKey="cardZip" left="77.12%" top={nameOnCardTop} />
            }
          </Scoped>
        </RenderPage>
      </>
    )
  }
  creditCardInfo = () => {
    const cardNumber = this.props.data.cardNumber || ''
    const individualCardNumbers = cardNumber.split('').slice(0, 16)

    const securityNumber = this.props.data.cardSecurityNumber || ''
    const individualSecurityNumbers = securityNumber.split('').slice(0, 4)

    const expMonthDay = (this.props.data.cardExpirationMonth || '') + (this.props.data.cardExpirationYear || '')
    const individualExpNumbers = expMonthDay.split('').slice(0, 4)

    return (
      <Scoped css={css}>
        {individualCardNumbers.map((number, index) => {
          const leftWithoutGaps = firstCardNumberLeft + (index * 3.08)
          const numGaps = Math.floor(index / 4)
          const leftWithGaps = leftWithoutGaps + (numGaps * 1.4)
          return (
            <div key={`cardNumber-${index}`} className="cardNumber" style={{left: leftWithGaps + '%'}}>
              {number}
            </div>
          )
        })}
        {individualSecurityNumbers.map((number, index) => {
          const left = firstSecurityNumberLeft + (index * 3.08)
          return (
            <div key={`securityNumber-${index}`} className="cardNumber" style={{left: left + '%'}}>
              {number}
            </div>
          )
        })}
        {individualExpNumbers.map((number, index) => {
          const left = firstExpNumberLeft + (index * 3.08)
          return (
            <div key={`exp-${index}`} className="cardNumber" style={{left: left + '%'}}>
              {number}
            </div>
          )
        })}
      </Scoped>
    )
  }
}

const line1Top = `15.61%`
const line4Top = `26.73%`
const line5Top = `29.93%`
const creditCardTop = `55.00%`
const cardNumberTop = `60.9%`
const firstCardNumberLeft = 6.73
const firstSecurityNumberLeft = 66.35
const firstExpNumberLeft = 80.76
const nameOnCardTop = `63.64%`

// original png is 1700 x 2200 px
const css = `
  & .cardNumber {
    position: absolute;
    top: ${cardNumberTop};
    width: 2.53%;
    height: 2.41%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .cardNumber * {
    position: absolute;
  }
`
