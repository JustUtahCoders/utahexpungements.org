import React from "react";
import RenderPage from "../render-page.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";

export default class DistrictCourtCoverSheet_Pdf extends React.Component {
  render() {
    const { renderData, data } = this.props;
    return (
      <>
        <RenderPage url="/static/forms/district-court-cover-sheet/district-court-cover-sheet-1.png">
          <PositionedString debugKey="person.fullName" left="5%" top="14.5%">
            {renderData("person.firstName")} {renderData("person.middleName")}{" "}
            {renderData("person.lastName")}
          </PositionedString>

          <PositionedString
            dataKey="person.addressStreet"
            left="5%"
            top="17.5%"
          />
          <PositionedString
            debugKey="addressStreetCityZip"
            left="5%"
            top="20.4%"
          >
            {renderData("person.addressCity")}
            {data.person.addressCity ? ", " : ""}{" "}
            {renderData("person.addressState")}{" "}
            {renderData("person.addressZip")}
          </PositionedString>
          <PositionedString dataKey="person.homePhone" left="5%" top="23.6%" />
          <PositionedString dataKey="person.email" left="25%" top="23.6%" />
          <PositionedString
            dataKey="person.petitionerAttorneyName"
            left="5%"
            top="28%"
          />
          <PositionedString
            dataKey="person.petitionerBarNumber"
            left="5%"
            top="30.9%"
          />
          <PositionedCheckmark
            dataKey="coversheet.isAttorney"
            left="68%"
            top="60.8%"
            shouldShow={true}
          />
          <PositionedCheckmark
            debugKey="exemptFromURCP26"
            top="84.1%"
            left="14.3%"
            shouldShow={true}
          />
        </RenderPage>
        <RenderPage url="/static/forms/district-court-cover-sheet/district-court-cover-sheet-2.png">
          <PositionedCheckmark
            debugKey="fee"
            left="58.5%"
            top="63.9%"
            shouldShow={true}
          />
        </RenderPage>
      </>
    );
  }
}
