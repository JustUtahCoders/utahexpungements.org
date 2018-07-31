import React from 'react'
import RenderPage from '../render-page.component.js'
import {Scoped} from 'kremling'

export default class ApplicationForCOE_Pdf extends React.Component {
  render() {
    const {renderData} = this.props

    return (
      <>
        <RenderPage url="/static/forms/application-for-coe/Exp-App-7-2018-1.png" />
        <RenderPage url="/static/forms/application-for-coe/Exp-App-7-2018-2.png">
          <Scoped css={css}>
            <div className="name">
              <div>
                {renderData('lastName')}
              </div>
              <div>
                {renderData('firstName')}
              </div>
              <div>
                {renderData('middleName')}
              </div>
            </div>
            <div className="birthday">
              {renderData('birthday')}
            </div>
            <div className="previously-used-names">
              {renderData('previouslyUsedNames')}
            </div>
            <div className="mailing-address">
              {renderData('mailingAddress')}
            </div>
          </Scoped>
        </RenderPage>
      </>
    )
  }
}

const line1Top = `15.61%`

const css = `
  & .name {
    left: 11.5%;
    top: ${line1Top};
    display: flex;
    justify-content: space-around;
    width: 55.47%;
  }

  & .birthday {
    top: ${line1Top};
    left: 81.76%;
  }

  & .previously-used-names {
    top: 19.82%;
    left: 42.88%;
  }

  & .mailing-address {
    top: 22.73%;
    left: 22.88%;
  }
`
