import React from "react";
import RenderPage from "../render-page.component";
import PositionedString from "../pdf-rendering/positioned-string.component";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import {
  getJudicialDistrict,
  getCounty
} from "../form-common-options/form-common-options";

import { Scoped } from "kremling";

export default function ProofOfCompletedService_Pdf({ renderData, data }) {
  return (
    <>
      <RenderPage url="/static/forms/proof-of-completed-service/proof_of_completed_service-1.png">
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
          left={personalInfo}
          top="21.09%"
        >
          {data.person.addressCity && `${renderData("person.addressCity")}, `}
          {renderData("person.addressState")}
          {`\u0020`}
          {renderData("person.addressZip")}
        </PositionedString>
        <PositionedString dataKey="person.phone" left="11.65%" top="24.5%" />
        <PositionedString dataKey="person.email" left="11.65%" top="28.1%" />
        <PositionedString debugKey="petitioner" left="11.85%" top="48.9%">
          <div>
            {renderData("person.firstName")} {renderData("person.middleName")}{" "}
            {renderData("person.lastName")}
          </div>
        </PositionedString>
        <PositionedString dataKey="case.caseNumber" left="54.05%" top="49.1%" />
        <PositionedString dataKey="case.judgeName" left="54.05%" top="53.9%" />
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
          left="50.7%"
          top={countyDistrictTop}
          debugKey="county"
        >
          {data.case.courtAddress &&
            getCounty(data.case.courtAddress, data.case.courtType)}
        </PositionedString>

        <PositionedString
          left="25.9%"
          top={countyDistrictTop}
          debugKey="judicialDistrict"
        >
          {data.case.courtAddress &&
            getJudicialDistrict(data.case.courtAddress, data.case.courtType)}
        </PositionedString>

        <PositionedString
          dataKey="case.courtAddress"
          left="27.8%"
          top="39.8%"
        />

        <PositionedCheckmark
          datakey="case.summons"
          left={documentsServedCheckmarks}
          top="68.4%"
          shouldShow={data.case.summons}
        />
        <PositionedCheckmark
          datakey="case.complaintOrPetition"
          left={documentsServedCheckmarks}
          top="70.4%"
          shouldShow={data.case.complaintOrPetition}
        />
        <PositionedCheckmark
          datakey="case.amendedComplaintOrPetition"
          left={documentsServedCheckmarks}
          top="72.4%"
          shouldShow={data.case.amendedComplaintOrPetition}
        />
        <PositionedCheckmark
          datakey="case.noticeOfDivorceEducationRequirements"
          left={documentsServedCheckmarks}
          top="74.4%"
          shouldShow={data.case.noticeOfDivorceEducationRequirements}
        />
        <PositionedCheckmark
          datakey="case.noticeOfURCP261"
          left={documentsServedCheckmarks}
          top="76.4%"
          shouldShow={data.case.noticeOfURCP261}
        />
        <PositionedCheckmark
          datakey="case.noticeOfURCP263"
          left={documentsServedCheckmarks}
          top="80.4%"
          shouldShow={data.case.noticeOfURCP263}
        />
        <PositionedCheckmark
          datakey="case.parentingPlan"
          left={documentsServedCheckmarks}
          top="82.4%"
          shouldShow={data.case.parentingPlan}
        />
        <PositionedCheckmark
          datakey="case.other"
          left={documentsServedCheckmarks}
          top="84.4%"
          shouldShow={data.case.other}
        />
        <PositionedString
          dataKey="case.otherDocumentsServed"
          left="28.1%"
          top="84.1%"
        />
      </RenderPage>
      <RenderPage url="/static/forms/proof-of-completed-service/proof_of_compeleted_service-2.png" />
      <RenderPage url="/static/forms/proof-of-completed-service/proof_of_compeleted_service-3.png" />
      <RenderPage url="/static/forms/proof-of-completed-service/proof_of_compeleted_service-4.png" />
      <RenderPage url="/static/forms/proof-of-completed-service/proof_of_compeleted_service-5.png" />
    </>
  );
}
const personalInfo = `11.5%`;
const courtTypeTop = `33.5%`;
const countyDistrictTop = `36.65%`;
const documentsServedCheckmarks = `19.64%`;
