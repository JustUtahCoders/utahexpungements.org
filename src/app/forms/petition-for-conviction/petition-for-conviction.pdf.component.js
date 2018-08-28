import React from 'react'
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
              {`${renderData('firstName')} ${renderData('middleName')} ${renderData('lastName')}`}
            </div>
            {this.formItem('addressStreet')}
            <div className="lineAddress">
              {`${renderData('addressCity')} ${renderData('addressState')} ${renderData('addressZip')}`}
            </div>
            {this.formItem('dayPhone')}
            {this.formItem('email')}
            {this.checkMark('petitionerRepresentative', data.petitionerRepresentative === 'petitioner', 'petitioner')}
            {this.checkMark('petitionerRepresentative', data.petitionerRepresentative === 'attorney', 'attorney')}
            {this.formItem('barNumber')}
            <div className="addressCourt">
              {`${renderData('addressCourtStreet')}, ${renderData('addressCourtCity')}, ${renderData('addressCourtState')} ${renderData('addressCourtZip')}`}
            </div>
            <div className="petitionerName">
              {`${renderData('firstName')} ${renderData('middleName')} ${renderData('lastName')}`}
            </div>
            {this.formItem('caseNumber')}
            {this.formItem('judgeName')}
            <div className="caseNumberConviction">
              {/* This is wrapped in a div because it shares data , but needs own styles */}
              {`${renderData('caseNumber')}`}
            </div>
          </Scoped>
        </RenderPage>
        <RenderPage url="/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-2.png">
        </RenderPage>
      </>
    )
  }
  formItem = dataKey => {
    return (
      <div className={dataKey}>
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

`
