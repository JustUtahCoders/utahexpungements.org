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
    <RenderPage url="/static/forms/draft-court-order-drug-possession-conviction/draft_court_order_drug_possession_conviction-1.png">
      <PositionedString debugKey="name" left={farLeft} top="14.06%">
        {`${renderData("person.firstName")} ${renderData(
          "person.middleName"
        )} ${renderData("person.lastName")}`}
      </PositionedString>

      <PositionedString
        dataKey="person.addressStreet"
        left={farLeft}
        top="17.50%"
      />

      <PositionedString debugKey="lineAddress" left={farLeft} top="20.90%">
        {`${renderData("person.addressCity")} ${renderData(
          "person.addressState"
        )} ${renderData("person.addressZip")}`}
      </PositionedString>

      <PositionedString dataKey="person.dayPhone" left={farLeft} top="24.45%" />

      <PositionedString dataKey="person.email" left={farLeft} top="27.95%" />

      <PositionedCheckmark
        dataKey="case.courtType"
        left="37.5%"
        top={courtTypeTop}
        shouldShow={courtType === "District"}
      />

      <PositionedCheckmark
        dataKey="case.courtType"
        left="47.9%"
        top={courtTypeTop}
        shouldShow={courtType === "Justice"}
      />

      <PositionedString left="25.9%" top="37.35%" debugKey="judicialDistrict">
        {courtAddress && getJudicialDistrict(courtAddress, courtType)}
      </PositionedString>

      <PositionedString left="50.7%" top="37.35%" debugKey="county">
        {courtAddress && getCounty(courtAddress, courtType)}
      </PositionedString>

      <PositionedString dataKey="case.courtAddress" left="27.8%" top="39.8%" />

      <PositionedString debugKey="petitionerName" left="12.5%" top="50.2%">
        {`${renderData("person.firstName")} ${renderData(
          "person.middleName"
        )} ${renderData("person.lastName")}`}
      </PositionedString>

      <PositionedString
        dataKey="case.caseNumber"
        left={caseJudgeLeft}
        top="50.5%"
      />

      <PositionedString
        dataKey="case.judgeName"
        left={caseJudgeLeft}
        top="55.1%"
      />
    </RenderPage>

    <RenderPage url="/static/forms/draft-court-order-drug-possession-conviction/draft_court_order_drug_possession_conviction-2.png">
      <PositionedString
        dataKey="case.caseNumber"
        left={caseNumberLeft}
        top="27.5%"
      />
      <PositionedString
        dataKey="case.caseNumber"
        left={caseNumberLeft}
        top="36.5%"
      />
    </RenderPage>

    <RenderPage url="/static/forms/draft-court-order-drug-possession-conviction/draft_court_order_drug_possession_conviction-3.png" />
  </>
);

const farLeft = `11.28%`;
const courtTypeTop = `34.1%`;
const countyDistrictTop = `37.35%`;
const caseJudgeLeft = `54.1%`;
const caseNumberLeft = `37.1%`;
