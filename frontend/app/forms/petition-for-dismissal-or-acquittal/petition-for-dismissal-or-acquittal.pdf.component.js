import React from "react";
import RenderPage from "../render-page.component.js";
//import { Scoped, a, m } from "kremling";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import {
  getJudicialDistrict,
  getCounty
} from "../form-common-options/form-common-options";

export default function PetitionForDismissalOrAcquittal_Pdf({
  renderData,
  data
}) {
  return (
    <>
      <RenderPage url="/static/forms/petition-for-dismissal-or-acquittal/01_Petition_to_Expunge_Records_Criminal-dismissal_or_acquittal-1.png">
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
        <PositionedCheckmark
          dataKey="person.petitionerRepresentative"
          left={petRepLeft}
          top="31%"
          shouldShow={data.person.petitionerRepresentative === "petitioner"}
        />
        <PositionedCheckmark
          dataKey="person.petitionerRepresentative"
          left={petRepLeft}
          top="32.75%"
          shouldShow={data.person.petitionerRepresentative === "attorney"}
        />
        <PositionedString
          dataKey="person.petitionerBarNumber"
          left={barNumberLeft}
          top="32.75%"
        />
        <PositionedCheckmark
          dataKey="case.courtType"
          left="37.5%"
          top="36.5%"
          shouldShow={data.case.courtType === "District"}
        />
        <PositionedCheckmark
          dataKey="case.courtType"
          left="47.9%"
          top="36.6%"
          shouldShow={data.case.courtType === "Justice"}
        />
        <PositionedString dataKey="case.courtAddress" left="27.8%" top="43%" />
        <PositionedString left="25.9%" top="39.55%" debugKey="judicialDistrict">
          {data.case.courtAddress &&
            getJudicialDistrict(data.case.courtAddress, data.case.courtType)}
        </PositionedString>
        <PositionedString left="50.7%" top="39.55%" debugKey="county">
          {data.case.courtAddress &&
            getCounty(data.case.courtAddress, data.case.courtType)}
        </PositionedString>
        <PositionedString debugKey="petitionerName" left="11.9%" top="52.9%">
          {`${renderData("person.firstName")} ${renderData(
            "person.middleName"
          )} ${renderData("person.lastName")}`}
        </PositionedString>
        <PositionedString dataKey="case.caseNumber" left="54.1%" top="52.9%" />
        <PositionedString dataKey="case.judgeName" left="54.1%" top="57.5%" />
        <PositionedString dataKey="case.caseNumber" left="17.4%" top="65.5%" />
        <PositionedString
          dataKey="case.arrestedDate"
          left="47.4%"
          top="63.25%"
        />
        <PositionedString
          dataKey="case.lawEnforcementAgencysFileNumber"
          left="49.75%"
          top="68.25%"
        />
        <PositionedString
          dataKey="case.resultOfArrest"
          left="20.55%"
          top="74%"
        />
      </RenderPage>
      {/* <RenderPage url="static/forms/petition-for-dismissal-or-acquittal/01_Petition_to_Expunge_Records_Criminal-dismissal_or_acquittal-2.png" >
      </RenderPage> */}
    </>
  );
}

const petRepLeft = `20.82%`;
const barNumberLeft = `62.2%`;
