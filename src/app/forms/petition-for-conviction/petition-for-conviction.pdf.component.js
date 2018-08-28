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
            {this.checkMark('petitionerRepresentative', data.petitionerRepresentative === 'petitioner', 'petitioner')}
            {this.checkMark('petitionerRepresentative', data.petitionerRepresentative === 'attorney', 'attorney')}
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

const css = `
  & .name {
    left: ${farLeft};
    top: 14.06%;
  }

  & .addressStreet {
    left: ${farLeft};
    top: 17.67%;
  }

  & .petitioner {
    left: ${petRepLeft};
    top: 31.75%;
  }

  & .attorney {
    left: ${petRepLeft};
    top: 33.25%;
  }
`
