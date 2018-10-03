import React from 'react'
import RenderPage from '../render-page.component.js'
import PositionedString from '../pdf-rendering/positioned-string.component.js'

export default class MotionToWaiveFees_Pdf extends React.Component {
  render() {
    const {renderData} = this.props
    return (
      <>
        <RenderPage url="/static/forms/motion-to-waive-fees/01_Motion_and_Affidavit_to_Waive_Fees-1.png">
          <PositionedString debugKey="name" left="11%" top="14.04%">
            {renderData('person.firstName')} {renderData('person.lastName')}
          </PositionedString>
        </RenderPage>
        <RenderPage url="/static/forms/motion-to-waive-fees/01_Motion_and_Affidavit_to_Waive_Fees-2.png">
        </RenderPage>
      </>
    )
  }
}
