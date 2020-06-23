import React from "react";
import RenderPage from "../render-page.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import {
  getJudicialDistrict,
  getCounty
} from "../form-common-options/form-common-options";

export default ({
  data: {
    case: { courtType, county, courtAddress }
  },
  renderData
}) => (
  <>
    <RenderPage url="/static/forms/draft-court-order-motion-waive-fees/draft_court_order_motion_waive_fees-1.png">
      <PositionedString debugKey="name" left={farLeft} top="13.06%">
        {`${renderData("person.firstName")} ${renderData(
          "person.middleName"
        )} ${renderData("person.lastName")}`}
      </PositionedString>

      <PositionedString
        dataKey="person.addressStreet"
        left={farLeft}
        top="16.50%"
      />

      <PositionedString debugKey="lineAddress" left={farLeft} top="19.90%">
        {`${renderData("person.addressCity")} ${renderData(
          "person.addressState"
        )} ${renderData("person.addressZip")}`}
      </PositionedString>

      <PositionedString
        dataKey="person.homePhone"
        left={farLeft}
        top="23.45%"
      />

      <PositionedString dataKey="person.email" left={farLeft} top="26.45%" />

      <PositionedCheckmark
        dataKey="case.courtType"
        left="37.8%"
        top={courtTypeTop}
        shouldShow={courtType === "District"}
      />

      <PositionedCheckmark
        dataKey="case.courtType"
        left="47.7%"
        top={courtTypeTop}
        shouldShow={courtType === "Justice"}
      />

      <PositionedString left="25.9%" top="35.5%" debugKey="judicialDistrict">
        {courtAddress && getJudicialDistrict(courtAddress, courtType)}
      </PositionedString>

      <PositionedString left="50.7%" top="35.5%" debugKey="county">
        {courtAddress && getCounty(courtAddress, courtType)}
      </PositionedString>

      <PositionedString dataKey="case.courtAddress" left="27.8%" top="38.9%" />

      <PositionedString debugKey="petitionerName" left="12.5%" top="46.5%">
        {`${renderData("person.firstName")} ${renderData(
          "person.middleName"
        )} ${renderData("person.lastName")}`}
      </PositionedString>

      <PositionedString dataKey="case.defendant" left="12.5%" top="54.3%">
        {renderData("case.defendant") || "State of Utah"}
      </PositionedString>

      <PositionedString
        dataKey="case.caseNumber"
        left={caseJudgeLeft}
        top="46.6%"
      />

      <PositionedString
        dataKey="case.judgeName"
        left={caseJudgeLeft}
        top="51.2%"
      />
    </RenderPage>

    <RenderPage url="/static/forms/draft-court-order-motion-waive-fees/draft_court_order_motion_waive_fees-2.png" />

    <RenderPage url="/static/forms/draft-court-order-motion-waive-fees/draft_court_order_motion_waive_fees-3.png" />
  </>
);

const farLeft = `11.28%`;
const courtTypeTop = `32.5%`;
const caseJudgeLeft = `54.1%`;
