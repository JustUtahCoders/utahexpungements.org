import React from 'react'
import RenderPage from '../render-page.component.js'
import {Scoped, a, m} from 'kremling'
import Checkmark from '../pdf-rendering/checkmark.component.js'

export default class AppForCOENoFees_Pdf extends React.Component {
  render() {
    const {data, renderData} = this.props

    return (
      <>
        <RenderPage url="/static/forms/application-for-coe-no-fees/BCI_Third_Party_Release_Form_and_Application-1.png">
          <Scoped css={css}>
            {data.person.coeRecipient === 'someone-else-is-recipient' &&
              <>
                <div className="coeRecipientName">
                  {renderData("person.coeRecipientName")}
                </div>
                <div className="coeRecipientAgency">
                  {renderData("person.coeRecipientAgency")}
                </div>
                <div className="coeRecipientAddress">
                  {data.person.coeRecipientStreet &&
                    `${renderData("person.coeRecipientStreet")}, `
                  }
                  {data.person.coeRecipientCity &&
                    `${renderData("person.coeRecipientCity")}, `
                  }
                  {renderData("person.coeRecipientState")}{`\u0020`}
                  {renderData("person.coeRecipientZip")}
                </div>
                <div className="nameOfApplicant">
                  {renderData("person.firstName")}{`\u0020`}
                  {renderData("person.middleName")}{`\u0020`}
                  {renderData("person.lastName")}
                </div>
              </>
            }
          </Scoped>
        </RenderPage>
        <RenderPage url="/static/forms/application-for-coe-no-fees/BCI_Third_Party_Release_Form_and_Application-2.png">
          <Scoped css={css}>
            <div className="slanted">
              <div className="lastName">
                {renderData("person.lastName")}
              </div>
              <div className="firstName">
                {renderData("person.firstName")}
              </div>
              <div className="middleName">
                {renderData("person.middleName")}
              </div>
              <div className="birthday">
                {renderData("person.birthday")}
              </div>
              <div className="previouslyUsedNames">
                {renderData("person.previouslyUsedNames")}
              </div>
              <div className="petitionerAddress">
                {data.person.addressStreet &&
                  `${renderData("person.addressStreet")}, `
                }
                {data.person.addressCity &&
                  `${renderData("person.addressCity")}, `
                }
                {renderData("person.addressState")}{`\u0020`}
                {renderData("person.addressZip")}
              </div>
              <div className="socialSecurity">
                {renderData("person.socialSecurity")}
              </div>
              <div className="driversLicenseNumber">
                {renderData("person.driversLicenseNumber")}
              </div>
              <div className="driversLicenseState">
                {renderData("person.driversLicenseState")}
              </div>
              <div className="homePhone">
                {renderData("person.homePhone")}
              </div>
              <div className="dayPhone">
                {renderData("person.dayPhone")}
              </div>
              <Checkmark dataKey="case.isTrafficExpungement" />
              <Checkmark dataKey="case.isAcquittalExpungement" />
              <div className="nameOfPetitioner">
                {renderData("person.firstName")} {renderData("person.middleName")} {renderData("person.lastName")}
              </div>
            </div>
          </Scoped>
        </RenderPage>
      </>
    )
  }
}

const coeRecipientAddressTop = `25.86%`

const css = `
  & .coeRecipientName {
    top: 19.94%;
    left: 10.84%;
  }

  & .coeRecipientAgency {
    top: 23.26%;
    left: 12.23%;
  }

  & .coeRecipientAddress {
    top: 25.86%;
    left: 21.61%;
  }

  & .nameOfApplicant {
    top: 35.1%;
    left: 22.72%;
  }

  & .slanted {
    position: static;
  }

  & .slanted > * {
    position: absolute;
    transform: rotate(.6deg);
  }

  & .lastName {
    left: 12.23%;
    top: 14.39%;
  }

  & .firstName {
    left: 34.15%;
    top: 14.6%;
  }

  & .middleName {
    left: 51.66%;
    top: 14.8%;
  }

  & .birthday {
    left: 78.63%;
    top: 15.04%;
  }

  & .previouslyUsedNames {
    left: 41.41%;
    top: 18.16%;
  }

  & .petitionerAddress {
    left: 23.65%;
    top: 20.39%;
  }

  & .socialSecurity {
    left: 20.97%;
    top: 24.00%;
  }

  & .driversLicenseNumber {
    left: 62.78%;
    top: 24.52%;
  }

  & .driversLicenseState {
    left: 81.42%;
    top: 24.57%;
  }

  & .homePhone {
    left: 25.33%;
    top: 26.75%;
  }

  & .dayPhone {
    left: 64.3%;
    top: 27.24%;
  }

  & .isTrafficExpungement {
    left: 5.77%;
    top: 27.96%;
  }

  & .isAcquittalExpungement {
    left: 5.77%;
    top: 30.3%;
  }

  & .nameOfPetitioner {
    left: 7.05%;
    top: 35.9%;
  }
`
