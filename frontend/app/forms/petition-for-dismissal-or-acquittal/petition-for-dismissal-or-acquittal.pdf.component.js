import React from "react";
import moment from "moment";
import RenderPage from "../render-page.component.js";
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
          top="31.6%"
          shouldShow={data.person.petitionerRepresentative === "petitioner"}
        />
        <PositionedCheckmark
          dataKey="person.petitionerRepresentative"
          left={petRepLeft}
          top="33.1%"
          shouldShow={data.person.petitionerRepresentative === "attorney"}
        />
        <PositionedString
          dataKey="person.petitionerBarNumber"
          left={barNumberLeft}
          top="33%"
        />
        <PositionedCheckmark
          dataKey="case.courtType"
          left="37.5%"
          top="36.9%"
          shouldShow={data.case.courtType === "District"}
        />
        <PositionedCheckmark
          dataKey="case.courtType"
          left="47.9%"
          top="36.9%"
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
        <PositionedCheckmark
          dataKey="case.wasNotConvicted"
          left="22.5%"
          top="79.8%"
        />
        <PositionedCheckmark
          dataKey="case.atLeast30DaysSinceArrest"
          left="22.5%"
          top="82.4%"
        />
        <PositionedCheckmark
          dataKey="case.noArrestSinceThisArrest"
          left="22.5%"
          top="84.86%"
        />
        {data.case.dismissalStatus !== "" && (
          <PositionedCheckmark
            dataKey="case.dismissalStatus"
            left="22.5%"
            top="87.27%"
          />
        )}
      </RenderPage>
      <RenderPage url="/static/forms/petition-for-dismissal-or-acquittal/01_Petition_to_Expunge_Records_Criminal-dismissal_or_acquittal-2.png">
        {data.case.dismissalStatus === "dissmissed-with-prejudice" && (
          <PositionedCheckmark
            dataKey="case.dismissalStatus"
            top="13.5%"
            left="27%"
          />
        )}
        {data.case.dismissalStatus === "dismissed-without-prejudice" && (
          <PositionedCheckmark
            dataKey="case.dismissalStatus"
            top="16%"
            left="27%"
          />
        )}
        {data.case.dismissalStatus === "dismissed-without-prejudice" &&
          data.case.dismissedWithoutPrejudiceOrConditionStatus ===
            "prosecutor-consent-to-issuance-of-coe" && (
            <PositionedCheckmark
              dataKey="case.dismissedWithoutPrejudiceOrConditionStatus"
              top="20.2%"
              left="31.5%"
            />
          )}
        {data.case.dismissalStatus === "dismissed-without-prejudice" &&
          data.case.dismissedWithoutPrejudiceOrConditionStatus ===
            "at-least-180-days-passed" && (
            <PositionedCheckmark
              dataKey="case.dismissedWithoutPrejudiceOrConditionStatus"
              top="24.3%"
              left="31.5%"
            />
          )}
        {data.case.dismissalStatus === "acquitted-at-trial" && (
          <PositionedCheckmark
            dataKey="case.dismissalStatus"
            top="28.5%"
            left="27%"
          />
        )}
        <PositionedString
          dataKey="case.publicInterest"
          left="17.8%"
          top="40.4%"
          style={{
            width: "74%",
            height: "15%",
            lineHeight: "30px",
            overflowY: "hidden"
          }}
        />
        <PositionedString debugKey="todaysDate" left="11.5%" top="73.5%">
          {moment().format("L")}
        </PositionedString>

        <PositionedString debugKey="printedName" left="54.4%" top="76.5%">
          {`${renderData("person.firstName")} ${renderData(
            "person.middleName"
          )} ${renderData("person.lastName")}`}
        </PositionedString>
      </RenderPage>
    </>
  );
}

const petRepLeft = `20.82%`;
const barNumberLeft = `62.2%`;