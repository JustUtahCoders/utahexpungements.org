import React from 'react'
import RenderPage from '../render-page.component.js'
import {Scoped, a, m} from 'kremling'

export default class ApplicationForCOE_Pdf extends React.Component {
  render() {
    const {renderData, data} = this.props

    return (
      <>
        <RenderPage url="/static/forms/application-for-coe/Exp-App-7-2018-1.png" />
        <RenderPage url="/static/forms/application-for-coe/Exp-App-7-2018-2.png">
          <Scoped css={css}>
            <div className="name">
              <div>
                {renderData('person.lastName')}
              </div>
              <div>
                {renderData('person.firstName')}
              </div>
              <div>
                {renderData('person.middleName')}
              </div>
            </div>
            {this.formItem('person.birthday')}
            {this.formItem('person.previouslyUsedNames')}
            <div className="mailingAddress">
              {`${renderData('person.addressStreet')}, ${renderData('person.addressCity')}, ${renderData('person.addressState')} ${renderData('person.addressZip')}`}
            </div>
            {this.formItem('person.socialSecurity')}
            {this.formItem('person.driversLicenseNumber')}
            {this.formItem('person.driversLicenseState')}
            {this.formItem('person.homePhone')}
            {this.formItem('person.dayPhone')}
            {this.checkMark('case.isTrafficExpungement', data.case && data.case.isTrafficExpungement)}
            {this.checkMark('case.isAcquittalExpungement', data.case && data.case.isAcquittalExpungement)}
            <div className="nameOfPetitioner">
              {renderData('person.firstName')} {renderData('person.lastName')}
            </div>
            {this.checkMark('check', data.paymentMethod === 'check')}
            {this.checkMark('creditCard', data.paymentMethod === 'creditCard')}
            {this.checkMark('visa', data.paymentMethod === 'creditCard' && data.creditCardIssuer === 'visa')}
            {this.checkMark('mastercard', data.paymentMethod === 'creditCard' && data.creditCardIssuer === 'mastercard')}
            {this.checkMark('discover', data.paymentMethod === 'creditCard' && data.creditCardIssuer === 'discover')}
            {this.checkMark('amex', data.paymentMethod === 'creditCard' && data.creditCardIssuer === 'amex')}
            {data.paymentMethod === 'creditCard' && this.creditCardInfo()}
            {data.paymentMethod === 'creditCard' && this.formItem('nameOnCard')}
            {data.paymentMethod === 'creditCard' && this.formItem('cardZip')}
          </Scoped>
        </RenderPage>
      </>
    )
  }
  formItem = name => (
    <div className={this.getClassName(name)}>
      {this.props.renderData(name)}
    </div>
  )
  checkMark = (name, shouldShow) => {
    if (shouldShow) {
      return (
        <div className={this.getClassName(name)}>
          {'\u2714'}
        </div>
      )
    } else {
      return null
    }
  }
  getClassName = (name) => {
    const splitByPeriod = name.split('.')
    return splitByPeriod.length > 0 ? splitByPeriod[splitByPeriod.length - 1] : name
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
  & .name {
    left: 11.5%;
    top: ${line1Top};
    display: flex;
    justify-content: space-around;
    width: 55.47%;
  }

  & .name > * {
    position: static;
  }

  & .birthday {
    top: ${line1Top};
    left: 81.76%;
  }

  & .previouslyUsedNames {
    top: 19.82%;
    left: 42.88%;
  }

  & .mailingAddress {
    top: 22.73%;
    left: 22.88%;
  }

  & .socialSecurity {
    top: ${line4Top};
    left: 21.18%;
  }

  & .driversLicenseNumber {
    top: ${line4Top};
    left: 65.06%;
  }

  & .driversLicenseState {
    top: ${line4Top};
    left: 85.00%;
  }

  & .homePhone {
    top: ${line5Top};
    left: 25.71%;
  }

  & .dayPhone {
    top: ${line5Top};
    left: 66.65%;
  }

  & .check {
    top: 53.60%;
    left: 5.90%;
  }

  & .creditCard {
    top: ${creditCardTop};
    left: 5.90%;
  }

  & .visa {
    top: ${creditCardTop};
    left: 36.82%;
  }

  & .mastercard {
    top: ${creditCardTop};
    left: 42.00%;
  }

  & .discover {
    top: ${creditCardTop};
    left: 51.12%;
  }

  & .amex {
    top: ${creditCardTop};
    left: 59.41%;
  }

  & .cardNumber {
    top: ${cardNumberTop};
    width: 2.53%;
    height: 2.41%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .nameOnCard {
    left: 30.71%;
    top: ${nameOnCardTop};
  }

  & .cardZip {
    left: 77.12%;
    top: ${nameOnCardTop};
  }

  & .isTrafficExpungement {
    left: 4.76%;
    top: 31.6%;
  }

  & .isAcquittalExpungement {
    left: 4.76%;
    top: 34.22%;
  }

  & .nameOfPetitioner {
    left: 6.05%;
    top: 40.7%;
  }
`
