import React from "react";
import RenderPage from "../render-page.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import {
  getJudicialDistrict,
  getCounty
} from "../form-common-options/form-common-options";

export default function PetitonForChargesNeverFiled_Pdf({ data, renderData }) {
  return (
    <>
      <RenderPage url="/static/forms/petition-for-charges-never-filed/01_Petition_to_Expunge_Records_Criminal-charges_never_filed-1.png">
        <PositionedString left="11%" top="13.94%" debugKey="person.name">
          {renderData("person.firstName")} {renderData("person.middleName")}{" "}
          {renderData("person.lastName")}
        </PositionedString>
        <PositionedString
          dataKey="person.addressStreet"
          left="11%"
          top="17.5%"
        />
        <PositionedString left="11%" top="20.91%" debugKey="person.address">
          {renderData("person.addressCity")}
          {data.person.addressCity ? ", " : ""}{" "}
          {renderData("person.addressState")} {renderData("person.addressZip")}
        </PositionedString>
        <PositionedString dataKey="person.homePhone" left="11%" top="24.6%" />
        <PositionedString dataKey="person.email" left="11%" top="27.91%" />
        <PositionedCheckmark
          dataKey="person.petitionerRepresentative"
          left="21%"
          top="31.2%"
          shouldShow={data.person.petitionerRepresentative === "petitioner"}
        />
        <PositionedCheckmark
          dataKey="person.petitionerRepresentative"
          left="21%"
          top="33%"
          shouldShow={data.person.petitionerRepresentative === "attorney"}
        />
        <PositionedString
          dataKey="person.petitionerBarNumber"
          left="62%"
          top="32.7%"
        />

        <PositionedCheckmark
          dataKey="case.courtType"
          left="37.5%"
          top="36.5%"
          shouldShow={data.case.courtType === "District"}
        />
        <PositionedCheckmark
          dataKey="case.courtType"
          left="48%"
          top="38%"
          shouldShow={data.case.courtType === "Justice"}
        />

        <PositionedString dataKey="case.judicialDistrict" left="27%" top="40%">
          {data.case.courtAddress &&
            getJudicialDistrict(data.case.courtAddress, data.case.courtType)}
        </PositionedString>
        <PositionedString dataKey="case.county" left="52%" top="40%">
          {data.case.courtAddress &&
            getCounty(data.case.courtAddress, data.case.courtType)}
        </PositionedString>
        <PositionedString dataKey="case.courtAddress" left="27%" top="42.5%" />
        <PositionedString debugKey="petitionerName" left="11.9%" top="52.7%">
          {renderData("person.firstName")} {renderData("person.middleName")}{" "}
          {renderData("person.lastName")}
        </PositionedString>
        <PositionedString dataKey="case.number" left="65%" top="52.5%" />
        <PositionedString dataKey="case.number" left="25%" top="65.5%" />
        <PositionedString dataKey="case.judgeName" left="65%" top="57.5%" />
        <PositionedString
          dataKey="case.arrestedDate"
          left="47.4%"
          top="63.25%"
        />
      </RenderPage>
      <RenderPage url="/static/forms/petition-for-charges-never-filed/01_Petition_to_Expunge_Records_Criminal-charges_never_filed-2.png">
        <PositionedString
          dataKey="case.publicInterest"
          left="17.8%"
          top="22%"
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
