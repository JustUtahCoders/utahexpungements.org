import React from 'react'
import {Scoped} from 'kremling'
import RenderPage from '../render-page.component.js'
import PositionedCheckmark from '../pdf-rendering/positioned-checkmark.component.js'
import PositionedString from '../pdf-rendering/positioned-string.component.js'

export default class AppForCOENoFees_Pdf extends React.Component {
  render() {
    const {data, renderData} = this.props

    return (
      <>
        <RenderPage url="/static/forms/application-for-coe-with-release/BCI_Third_Party_Release_Form_and_Application-1.png">
          {data.person.coeRecipient === 'someone-else-is-recipient' &&
            <>
              <PositionedString dataKey="person.coeRecipientName" left="10.84%" top="19.94%" />
              <PositionedString dataKey="person.coeRecipientAgency" left="12.23%" top="23.26%" />
              <PositionedString debugKey="coeRecipientAddress" left="21.61%" top="25.86%">
                {data.person.coeRecipientStreet &&
                  `${renderData("person.coeRecipientStreet")}, `
                }
                {data.person.coeRecipientCity &&
                  `${renderData("person.coeRecipientCity")}, `
                }
                {renderData("person.coeRecipientState")}{`\u0020`}
                {renderData("person.coeRecipientZip")}
              </PositionedString>
              <PositionedString debugKey="nameOfApplicant" left="22.72%" top="35.1%">
                {renderData("person.firstName")}{`\u0020`}
                {renderData("person.middleName")}{`\u0020`}
                {renderData("person.lastName")}
              </PositionedString>
            </>
          }
        </RenderPage>
        <RenderPage url="/static/forms/application-for-coe-with-release/BCI_Third_Party_Release_Form_and_Application-2.png">
          <Scoped css={css}>
            <div className="slanted">
              <PositionedString dataKey="person.lastName" left="12.23%" top="14.39%" />
              <PositionedString dataKey="person.firstName" left="34.15%" top="14.6%" />
              <PositionedString dataKey="person.middleName" left="51.66%" top="14.8%" />
              <PositionedString dataKey="person.birthday" left="78.63%" top="15.04%" />
              <PositionedString dataKey="person.previouslyUsedNames" left="41.41%" top="18.16%" />
              <PositionedString debugKey="petitionerAddress" left="23.65%" top="20.39%">
                {data.person.addressStreet &&
                  `${renderData("person.addressStreet")}, `
                }
                {data.person.addressCity &&
                  `${renderData("person.addressCity")}, `
                }
                {renderData("person.addressState")}{`\u0020`}
                {renderData("person.addressZip")}
              </PositionedString>
              <PositionedString dataKey="person.socialSecurity" left="20.97%" top="24.00%" />
              <PositionedString dataKey="person.driversLicenseNumber" left="62.78%" top="24.52%" />
              <PositionedString dataKey="person.driversLicenseState" left="81.42%" top="24.57%" />
              <PositionedString dataKey="person.homePhone" left="25.33%" top="26.75%" />
              <PositionedString dataKey="person.dayPhone" left="64.3%" top="27.24%" />
              <PositionedCheckmark dataKey="case.isTrafficExpungement" left="5.77%" top="27.96%" />
              <PositionedCheckmark dataKey="case.isAcquittalExpungement" left="5.77%" top="30.3%" />
              <PositionedString debugKey="nameOfPetitioner" left="7.05%" top="35.9%">
                {renderData("person.firstName")} {renderData("person.middleName")} {renderData("person.lastName")}
              </PositionedString>
            </div>
          </Scoped>
        </RenderPage>
      </>
    )
  }
}

const css = `
  & .slanted {
    position: static;
  }

  & .slanted > * {
    position: absolute;
    transform: rotate(.6deg);
  }
`
