import React from 'react'
import RenderPage from '../render-page.component.js'
import {Scoped, a, m} from 'kremling'

export default class MotionToWaiveFees_Pdf extends React.Component {
  render() {
    const {renderData} = this.props
    return (
      <>
        <RenderPage url="/static/forms/motion-to-waive-fees/01_Motion_and_Affidavit_to_Waive_Fees-1.png">
          <Scoped css={css}>
            <div className="name">
              {renderData('person.firstName')} {renderData('person.lastName')}
            </div>
          </Scoped>
        </RenderPage>
        <RenderPage url="/static/forms/motion-to-waive-fees/01_Motion_and_Affidavit_to_Waive_Fees-2.png">
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
`
