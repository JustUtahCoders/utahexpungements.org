import React from "react";
import RenderPage from "../render-page.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import { getJudicialDistrictFromCounty } from "../form-common-options/form-common-options";

export default ({
  data: {
    case: { courtType, county }
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

      <PositionedString
        dataKey="case.county"
        left="51.4%"
        top={countyDistrictTop}
      />

      <PositionedString left="26.5%" top={countyDistrictTop} debugKey="county">
        {county ? getJudicialDistrictFromCounty(county) : null}
      </PositionedString>

      <PositionedString dataKey="case.courtAddress" left="27.8%" top="39.8%" />

      <PositionedString debugKey="petitionerName" left="12.5%" top="50.2%">
        {renderData("person.fullName")}
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

      <PositionedCheckmark
        debugKey="resolutionType"
        left="12.1%"
        top="65.7%"
        shouldShow={true}
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

    <RenderPage url="/static/forms/draft-court-drug-possession-order-conviction/draft_court_order_drug_possession_conviction-3.png" />
  </>
);

const farLeft = `11.28%`;
const courtTypeTop = `34.1%`;
const countyDistrictTop = `37.35%`;
const caseJudgeLeft = `54.1%`;
const caseNumberLeft = `37.1%`;
