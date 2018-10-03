import React from 'react'
import RenderPage from '../render-page.component.js'
import {Scoped, a, m} from 'kremling'

export default class PetitionForDrugConviction_Pdf extends React.Component {
  render() {
    const {renderData} = this.props
    return (
      <>
      <RenderPage url="/static/forms/petition-for-drug-conviction/01_Petition_to_Expunge_Records_Criminal-drug_possession-1.png">
          <Scoped css={css}>
            <div className="name">
              {renderData('person.firstName')} {renderData('person.lastName')}
            </div>
            <div className="street">
              {renderData('person.addressStreet')} 
            </div>
            <div className="city-state-zip">
              {renderData('person.addressCity')}, {renderData('person.addressState')} {renderData('person.addressZip')}
            </div>
            <div className="phone">
              {renderData('person.homePhone')}
            </div>
            <div className="email">
              {renderData('person.email')}
            </div>
          </Scoped>
        </RenderPage>
        <RenderPage url="/static/forms/petition-for-drug-conviction/01_Petition_to_Expunge_Records_Criminal-drug_possession-2.png">
          <Scoped css={css}>
            <div>
            </div>
          </Scoped>
        </RenderPage>
      </>
    )
  }
}

const css = `
  & .name {
    left: 11%;
    top: 13.94%;
  }

  & .street {
    top: 17.5%;
    left: 11%;
  }

  & .city-state-zip {
    top: 20.91%;
    left: 11%;
  }

  & .phone {
    top: 24.71%;
    left: 11%;
  }

  & .email {
    top: 27.91%;
    left: 11%;
  }
`
