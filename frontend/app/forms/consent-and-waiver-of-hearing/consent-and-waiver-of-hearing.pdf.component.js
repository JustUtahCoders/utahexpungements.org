import React from "react";
import { Scoped } from "kremling";
import RenderPage from "../render-page.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import {
  getJudicialDistrict,
  getCounty
} from "../form-common-options/form-common-options";
import Section from "../inputs/section.component.js";

export default function consentAndWaiverOfHearing_Pdf({ data, renderData }) {
  return (
    <>
      <RenderPage url="/static/forms/consent-and-waiver-of-hearing/consent-and-waiver-of-hearing-1.png">
        <PositionedCheckmark
          dataKey="case.courtType"
          left="37.5%"
          top="34.1%"
          shouldShow={data.case.courtType === "District"}
        />
        <PositionedCheckmark
          dataKey="case.courtType"
          left="47.9%"
          top="34.1%"
          shouldShow={data.case.courtType === "Justice"}
        />

        <PositionedString
          dataKey="case.courtAddress"
          left="27.8%"
          top="40.5%"
        />

        <PositionedString left="25.9%" top="37.35%" debugKey="judicialDistrict">
          {data.case.courtAddress &&
            getJudicialDistrict(data.case.courtAddress, data.case.courtType)}
        </PositionedString>

        <PositionedString left="50.7%" top="37.35%" debugKey="county">
          {data.case.courtAddress &&
            getCounty(data.case.courtAddress, data.case.courtType)}
        </PositionedString>

        <PositionedString debugKey="petitionerName" left="12.5%" top="51.8%">
          {`${renderData("person.firstName")}
              ${renderData("person.middleName")}
              ${renderData("person.lastName")}`}
        </PositionedString>
        <PositionedString dataKey="case.caseNumber" left="53.7%" top="52.3%" />
        <PositionedString dataKey="case.judgeName" left="54.1%" top="56.7%" />
      </RenderPage>

      <RenderPage url="/static/forms/consent-and-waiver-of-hearing/consent-and-waiver-of-hearing-1.png" />
    </>
  );
}

const farLeft = `11.28%`;
