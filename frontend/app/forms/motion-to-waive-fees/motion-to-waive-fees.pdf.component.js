import React from "react";
import RenderPage from "../render-page.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";

export default class MotionToWaiveFees_Pdf extends React.Component {
  render() {
    const { renderData } = this.props;
    return (
      <>
        <RenderPage url="/static/forms/motion-to-waive-fees/Motion_to_Waive_Fees_and_Statement_Supporting-01.png"></RenderPage>
        <RenderPage url="/static/forms/motion-to-waive-fees/Motion_to_Waive_Fees_and_Statement_Supporting-02.png"></RenderPage>
        <RenderPage url="/static/forms/motion-to-waive-fees/Motion_to_Waive_Fees_and_Statement_Supporting-03.png"></RenderPage>
        <RenderPage url="/static/forms/motion-to-waive-fees/Motion_to_Waive_Fees_and_Statement_Supporting-04.png"></RenderPage>
        <RenderPage url="/static/forms/motion-to-waive-fees/Motion_to_Waive_Fees_and_Statement_Supporting-05.png"></RenderPage>
        <RenderPage url="/static/forms/motion-to-waive-fees/Motion_to_Waive_Fees_and_Statement_Supporting-06.png"></RenderPage>
        <RenderPage url="/static/forms/motion-to-waive-fees/Motion_to_Waive_Fees_and_Statement_Supporting-07.png"></RenderPage>
        <RenderPage url="/static/forms/motion-to-waive-fees/Motion_to_Waive_Fees_and_Statement_Supporting-09.png"></RenderPage>
        <RenderPage url="/static/forms/motion-to-waive-fees/Motion_to_Waive_Fees_and_Statement_Supporting-10.png"></RenderPage>
      </>
    );
  }
}
