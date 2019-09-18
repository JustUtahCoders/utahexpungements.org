import React from "react";
import RenderPage from "../render-page.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";

export default class Coversheet_Pdf extends React.Component {
  render() {
    const { renderData, data } = this.props;
    return (
      <>
        <RenderPage url="/static/forms/coversheet/coversheet-1.png">
          <PositionedString left="5%" top="14.5%">
            {renderData("person.firstName")} {renderData("person.middleName")}{" "}
            {renderData("person.lastName")}
          </PositionedString>

          <PositionedString
            dataKey="person.addressStreet"
            left="5%"
            top="17.5%"
          />
          <PositionedString left="5%" top="20.4%">
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
          <PositionedCheckmark left="68%" top="60.8%" shouldShow={true} />
        </RenderPage>
        <RenderPage url="/static/forms/coversheet/coversheet-2.png">
          <PositionedCheckmark left="58.5%" top="63.9%" shouldShow={true} />
        </RenderPage>
      </>
    );
  }
}
