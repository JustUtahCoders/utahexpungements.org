import React from "react";
import RenderPage from "../render-page.component";
import PositionedString from "../pdf-rendering/positioned-string.component.js";

export default function JusticeCourtCoverSheet_Pdf({ renderData, data }) {
  return (
    <RenderPage url="/static/forms/justice-court-cover-sheet/justice_court_cover_sheet-1.png">
      <PositionedString debugKey="person.fullName" left="6%" top="12.6%">
        {renderData("person.firstName")} {renderData("person.middleName")}{" "}
        {renderData("person.lastName")}
      </PositionedString>

      <PositionedString dataKey="person.addressStreet" left="6%" top="15.8%" />
      <PositionedString debugKey="addressStreetCityZip" left="6%" top="18.9%">
        {renderData("person.addressCity")}
        {data.person.addressCity ? ", " : ""}{" "}
        {renderData("person.addressState")} {renderData("person.addressZip")}
      </PositionedString>
      <PositionedString dataKey="person.homePhone" left="6%" top="22.1%" />
      <PositionedString dataKey="person.email" left="28.8%" top="22.1%" />
      <PositionedString
        dataKey="person.petitionerAttorneyName"
        left="6%"
        top="26.9%"
      />
      <PositionedString
        dataKey="person.petitionerBarNumber"
        left="6%"
        top="29.8%"
      />
    </RenderPage>
  );
}
