import React from "react";
import RenderPage from "../render-page.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";

export default class PetitionForDrugConviction_Pdf extends React.Component {
  render() {
    const { renderData, data } = this.props;
    return (
      <>
        <RenderPage url="/static/forms/petition-for-drug-conviction/01_Petition_to_Expunge_Records_Criminal-drug_possession-1.png">
          <PositionedString left="11%" top="13.94%">
            {renderData("person.firstName")} {renderData("person.middleName")}{" "}
            {renderData("person.lastName")}
          </PositionedString>
          <PositionedString
            dataKey="person.addressStreet"
            left="11%"
            top="17.5%"
          />
          <PositionedString left="11%" top="20.91%">
            {renderData("person.addressCity")}
            {data.person.addressCity ? ", " : ""}{" "}
            {renderData("person.addressState")}{" "}
            {renderData("person.addressZip")}
          </PositionedString>
          <PositionedString
            dataKey="person.homePhone"
            left="11%"
            top="24.71%"
          />
          <PositionedString dataKey="person.email" left="11%" top="27.91%" />

          <PositionedCheckmark
            left="21%"
            top="31.2%"
            shouldShow={data.person.petitionerRepresentative === "petitioner"}
          />
          <PositionedCheckmark
            left="21%"
            top="33%"
            shouldShow={data.person.petitionerRepresentative === "attorney"}
          />

          <PositionedCheckmark
            left="37.5%"
            top="36.5%"
            shouldShow={data.case.courtType === "district"}
          />
          <PositionedCheckmark
            left="48%"
            top="38%"
            shouldShow={data.case.courtType === "justice"}
          />

          <PositionedString
            dataKey="case.judicialDistrict"
            left="27%"
            top="40%"
          />
          <PositionedString dataKey="case.county" left="52%" top="40%" />
          <PositionedString
            dataKey="case.courtAddress"
            left="27%"
            top="42.5%"
          />
          <PositionedString debugKey="petitionerName" left="11.9%" top="52.7%">
            {renderData("person.firstName")} {renderData("person.middleName")}{" "}
            {renderData("person.lastName")}
          </PositionedString>
          <PositionedString dataKey="case.number" left="65%" top="52.5%" />
          <PositionedString dataKey="case.number" left="25%" top="65.5%" />
          <PositionedString dataKey="case.judgeName" left="65%" top="57.5%" />
          {data.drugConviction && (
            <>
              <PositionedCheckmark
                left="24%"
                top="81.2%"
                shouldShow={data.drugConviction.pryingQuestion === "no"}
              />
              <PositionedCheckmark
                left="24%"
                top="84%"
                shouldShow={data.drugConviction.pryingQuestion === "yes"}
              />
            </>
          )}
        </RenderPage>
        <RenderPage url="/static/forms/petition-for-drug-conviction/01_Petition_to_Expunge_Records_Criminal-drug_possession-2.png">
          <PositionedString
            dataKey="drugConviction.pryingQuestionAnswer"
            left="17.4%"
            top="10%"
          />
          <PositionedString
            dataKey="case.publicInterest"
            left="17.4%"
            top="29%"
            style={{
              width: "74%",
              height: "15%",
              lineHeight: "30px",
              overflowY: "hidden"
            }}
          />
        </RenderPage>
      </>
    );
  }
}
