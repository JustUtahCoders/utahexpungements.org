import React from 'react'
import moment from 'moment';

import RenderPage from '../render-page.component.js'
import {Scoped} from 'kremling'

export default class PetitionForConviction_Pdf extends React.Component {
  render() {
    const {data, renderData} = this.props

    return (
      <>
        <RenderPage url="/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-1.png">
          <Scoped css={css}>
            <div className="name">
              {`${renderData('person.firstName')} ${renderData('person.middleName')} ${renderData('person.lastName')}`}
            </div>
            {this.formItem('person.addressStreet')}
            <div className="lineAddress">
              {`${renderData('person.addressCity')} ${renderData('person.addressState')} ${renderData('person.addressZip')}`}
            </div>
            {this.formItem('person.dayPhone')}
            {this.formItem('person.email')}
            {this.checkMark('person.petitionerRepresentative', data.petitionerRepresentative === 'petitioner', 'petitioner')}
            {this.checkMark('person.petitionerRepresentative', data.petitionerRepresentative === 'attorney', 'attorney')}
            {this.formItem('person.barNumber')}
            <div className="addressCourt">
              {`${renderData('case.addressCourtStreet')}, ${renderData('case.addressCourtCity')}, ${renderData('case.addressCourtState')} ${renderData('case.addressCourtZip')}`}
            </div>
            <div className="petitionerName">
              {`${renderData('person.firstName')} ${renderData('person.middleName')} ${renderData('person.lastName')}`}
            </div>
            {this.formItem('case.caseNumber')}
            {this.formItem('case.judgeName')}
            <div className="caseNumberConviction">
              {/* This is wrapped in a div because it shares data , but needs own styles */}
              {`${renderData('case.caseNumber')}`}
            </div>
            {this.formItem('case.publicInterest')}
          </Scoped>
        </RenderPage>
        <RenderPage url="/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-2.png">
          <Scoped css={css}>

            <div className="todaysDate">
              {moment().format('MM DD YYY')}
            </div>
            <div className="printedName">
              {`${renderData('person.firstName')} ${renderData('person.middleName')} ${renderData('person.lastName')}`}
            </div>
          </Scoped>
        </RenderPage>
      </>
    )
  }

  formItem = dataKey => {
    const index = dataKey.indexOf('.');    
    const trimmedName = dataKey.substring(index + 1);
    return (
      <div className={trimmedName}>
        {this.props.renderData(dataKey)}
      </div>
    )
  }

  checkMark = (dataKey, isChecked, className=dataKey) => {
    if (isChecked) {
      return (
        <div className={className}>
          {'\u2714'}
        </div>
      ) 
    } else {
      return null;
    }
  }
}

const farLeft = `11.28%`
const petRepLeft = `20.82%`
const barNumberLeft = `62.2%`

const css = `
  & .name {
    left: ${farLeft};
    top: 14.06%;
  }

  & .addressStreet {
    left: ${farLeft};
    top: 17.67%;
  }

  & .lineAddress {
    left: ${farLeft};
    top: 20.90%;
  }

  & .dayPhone {
    left: ${farLeft};
    top: 24.75%;
  }

  & .email {
    left: ${farLeft};
    top: 28.3%;
  }

  & .petitioner {
    left: ${petRepLeft};
    top: 31.75%;
  }

  & .attorney {
    left: ${petRepLeft};
    top: 33.25%;
  }

  & .barNumber {
    left: ${barNumberLeft};
    top: 33.15%;
  }

  & .addressCourt {
    left: 27.8%;
    top: 43.6%;
  }

  & .petitionerName {
    left: 11.9%;
    top: 53%;
  }

  & .caseNumber {
    left: 54.1%;
    top: 53%;
  }

  & .judgeName {
    left: 54.1%;
    top: 58%;
  }

  & .caseNumberConviction {
    left: 17.4%;
    top: 65.8%;
  }

  & .publicInterest {
    left: 17.4%;
    top: 79%;
    width: 74%;
    height: 15%;
    line-height: 30px;
    overflow-y: hidden;
  }

  & .printedName {
    left: 54.4%;
    top: 39.7%;
  }

  & .todaysDate {
    left: 10.9%;
    top: 36.7%;
  }

`
