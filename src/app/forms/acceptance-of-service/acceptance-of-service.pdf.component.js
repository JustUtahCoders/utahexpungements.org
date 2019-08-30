import React from "react";
import RenderPage from "../render-page.component";
import PositionedString from "../pdf-rendering/positioned-string.component";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import { getJudicialDistrictFromCounty } from "../form-common-options/form-common-options";

export default function AcceptanceOfService_Pdf({ renderData, data }) {
  return (
    <>
      <RenderPage url="/static/forms/acceptance-of-service/Acceptance_of_service-1.png">
        <PositionedString debugKey="person.fullName" left="11.5%" top="13.8%">
          <div>
            {renderData("person.firstName")} {renderData("person.middleName")}{" "}
            {renderData("person.lastName")}
          </div>
        </PositionedString>
        <PositionedString
          dataKey="person.addressStreet"
          left="11.65%"
          top="17.49%"
        />
        <PositionedString
          debugKey="petitionerAddress"
          left="11.65%"
          top="21.09%"
        >
          {data.person.addressCity && `${renderData("person.addressCity")}, `}
          {renderData("person.addressState")}
          {`\u0020`}
          {renderData("person.addressZip")}
        </PositionedString>
        <PositionedString
          dataKey="person.homePhone"
          left="11.65%"
          top="24.5%"
        />
        <PositionedString dataKey="person.email" left="11.65%" top="28.1%" />
        <PositionedString debugKey="petitioner" left="11.85%" top="49.7%">
          <div>
            {renderData("person.firstName")} {renderData("person.middleName")}{" "}
            {renderData("person.lastName")}
          </div>
        </PositionedString>
        <PositionedString dataKey="case.caseNumber" left="54.05%" top="49.7%" />
        <PositionedString dataKey="case.judgeName" left="54.05%" top="54.4%" />
        <PositionedCheckmark
          dataKey="case.courtType"
          left="37.6%"
          top={courtTypeTop}
          shouldShow={data.case.courtType === "District"}
        />

        <PositionedCheckmark
          dataKey="case.courtType"
          left="48%"
          top={courtTypeTop}
          shouldShow={data.case.courtType === "Justice"}
        />

        <PositionedString
          dataKey="case.county"
          left="51.4%"
          top={countyDistrictTop}
        />

        <PositionedString
          left="26.5%"
          top={countyDistrictTop}
          debugKey="county"
        >
          {data.case.county
            ? getJudicialDistrictFromCounty(data.case.county)
            : null}
        </PositionedString>

        <PositionedString
          dataKey="case.courtAddress"
          left="27.8%"
          top="39.8%"
        />
      </RenderPage>
    </>
  );
}

const courtTypeTop = `33.5%`;
const countyDistrictTop = `36.65%`;
