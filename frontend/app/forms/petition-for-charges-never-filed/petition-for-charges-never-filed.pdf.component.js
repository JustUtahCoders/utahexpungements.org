import React from "react";
import moment from "moment";
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
          left="38%"
          top="37%"
          shouldShow={data.case.courtType === "District"}
        />
        <PositionedCheckmark
          dataKey="case.courtType"
          left="48%"
          top="37%"
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
        <PositionedString dataKey="case.courtAddress" left="27%" top="43.5%" />
        <PositionedString debugKey="petitionerName" left="11.9%" top="52.7%">
          {renderData("person.firstName")} {renderData("person.middleName")}{" "}
          {renderData("person.lastName")}
        </PositionedString>
        <PositionedString dataKey="case.caseNumber" left="54.1%" top="52.9%" />
        <PositionedString dataKey="case.judgeName" left="65%" top="57.5%" />
        <PositionedString
          dataKey="case.arrestedDate"
          left="47.4%"
          top="63.25%"
        />
        <PositionedString
          dataKey="case.lawEnforcementAgency"
          left="17.6%"
          top="65.9%"
        />
        <PositionedString
          dataKey="case.lawEnforcementAgencysFileNumber"
          left="49.4%"
          top="68.5%"
        />
        <PositionedCheckmark
          dataKey="case.atLeast30DaysSinceArrest"
          left="24%"
          top="79.8%"
        />
        <PositionedCheckmark
          dataKey="case.noArrestSinceThisArrest"
          left="24%"
          top="82.4%"
        />
        <PositionedCheckmark
          dataKey="case.noChargesWereFiled"
          left="24%"
          top="84.86%"
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
        <PositionedString debugKey="todaysDate" left="11.5%" top="55.5%">
          {moment().format("L")}
        </PositionedString>

        <PositionedString debugKey="printedName" left="54.4%" top="58.5%">
          {`${renderData("person.firstName")} ${renderData(
            "person.middleName"
          )} ${renderData("person.lastName")}`}
        </PositionedString>
      </RenderPage>
    </>
  );
}
