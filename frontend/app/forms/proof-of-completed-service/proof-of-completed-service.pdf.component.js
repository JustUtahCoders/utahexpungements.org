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
      <RenderPage url="/static/forms/proof-of-completed-service/proof_of_completed_service-2.png">
        <PositionedCheckmark
          datakey="case.proofOfCompletedServiceByMailCopy"
          left="18.01%"
          top="21.45%"
          shouldShow={data.case.proofOfCompletedServiceByMailCopy}
        />
        <PositionedString
          dataKey="case.proofOfCompletedServiceMailFullname"
          left="24.01%"
          top="26.01%"
        />
        <PositionedString
          dataKey="case.proofOfCompletedServiceMailAddressStreet"
          left="24.01%"
          top="29.60%"
        />
        <PositionedString
          debugKey="case.proofOfCompletedServiceMailAddress"
          left="24.01%"
          top="33.09%"
        >
          {data.case.proofOfCompletedServiceMailAddressCity &&
            `${renderData("case.proofOfCompletedServiceMailAddressCity")}, `}
          {renderData("case.proofOfCompletedServiceMailAddressState")}
          {`\u0020`}
          {renderData("case.proofOfCompletedServiceMailAddressZip")}
        </PositionedString>
        <PositionedCheckmark
          datakey="case.proofOfCompletedServiceAddressee"
          left="22.64%"
          top="40.01%"
          shouldShow={data.case.proofOfCompletedServiceAddressee}
        />
        <PositionedCheckmark
          datakey="case.proofOfCompletedServiceAuthorizedPerson"
          left="22.64%"
          top="42.45%"
          shouldShow={data.case.proofOfCompletedServiceAuthorizedPerson}
        />
        <PositionedCheckmark
          datakey="case.proofOfCompletedServiceThirdPerson"
          left="18.01%"
          top="50.45%"
          shouldShow={data.case.proofOfCompletedServiceThirdPerson}
        />
        <PositionedCheckmark
          datakey="case.proofOfCompletedServiceDeliveredForm"
          left="18.01%"
          top="64.25%"
          shouldShow={data.case.proofOfCompletedServiceDeliveredForm}
        />
        <PositionedString
          dataKey="case.proofOfCompletedServiceDelieveredDate"
          left="26.64%"
          top="64.25%"
        />
        <PositionedString
          dataKey="case.proofOfCompletedServiceDelieveredAddressZip"
          left="36.64%"
          top="67.55%"
        />
        <PositionedString
          dataKey="case.proofOfCompletedServiceDelieveredName"
          left="26.64%"
          top="72.65%"
        />
        <PositionedCheckmark
          datakey="case.defendant"
          left="21.01%"
          top="78.65%"
          shouldShow={data.case.defendant}
        />
        <PositionedCheckmark
          datakey="case.plaintiff"
          left="21.01%"
          top="81.15%"
          shouldShow={data.case.plaintiff}
        />
        <PositionedCheckmark
          datakey="case.proofOfCompletedServicePersonSuitableAge"
          left="21.01%"
          top="83.55%"
          shouldShow={data.case.proofOfCompletedServicePersonSuitableAge}
        />
      </RenderPage>
      <RenderPage url="/static/forms/proof-of-completed-service/proof_of_completed_service-3.png">
        <PositionedString
          dataKey="case.proofOfCompletedServicePersonSuitableAgeDescribe"
          left="24.14%"
          top="13.15%"
        />
        <PositionedCheckmark
          datakey="case.agent"
          left="21.01%"
          top="17.75%"
          shouldShow={data.case.agent}
        />
        <PositionedCheckmark
          datakey="case.officer"
          left="21.01%"
          top="25.20%"
          shouldShow={data.case.officer}
        />
        <PositionedCheckmark
          datakey="case.authorizedAgent"
          left="21.01%"
          top="29.75%"
          shouldShow={data.case.authorizedAgent}
        />
        <PositionedCheckmark
          datakey="case.recorder"
          left="21.01%"
          top="40.75%"
          shouldShow={data.case.recorder}
        />
        <PositionedCheckmark
          datakey="case.clerk"
          left="21.01%"
          top="46.45%"
          shouldShow={data.case.clerk}
        />
        <PositionedCheckmark
          datakey="case.attorneyGeneral"
          left="21.01%"
          top="52.15%"
          shouldShow={data.case.attorneyGeneral}
        />
        <PositionedString
          dataKey="case.proofOfCompletedServicePersonStatute"
          left="25.14%"
          top="53.75%"
        />
        <PositionedString
          dataKey="case.proofOfCompletedServicePersonStatuteAddress"
          left="25.14%"
          top="57.95%"
        />
        <PositionedCheckmark
          datakey="case.proofOfCompletedServiceBoardMember"
          left="21.01%"
          top="63.95%"
          shouldShow={data.case.proofOfCompletedServiceBoardMember}
        />
        <PositionedCheckmark
          datakey="case.proofOfCompletedServiceOther"
          left="21.01%"
          top="71.25%"
          shouldShow={data.case.proofOfCompletedServiceOther}
        />
        <PositionedString
          dataKey="case.proofOfCompletedServiceOtherDesribe"
          left="25.14%"
          top="73.35%"
        />
      </RenderPage>
      <RenderPage url="/static/forms/proof-of-completed-service/proof_of_completed_service-4.png" />
      <RenderPage url="/static/forms/proof-of-completed-service/proof_of_completed_service-5.png" />
    </>
  );
}
const personalInfo = `11.5%`;
const courtTypeTop = `33.5%`;
const countyDistrictTop = `36.65%`;
const documentsServedCheckmarks = `19.64%`;
