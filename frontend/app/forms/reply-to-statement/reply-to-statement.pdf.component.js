import React from "react";
import RenderPage from "../render-page.component";
import PositionedString from "../pdf-rendering/positioned-string.component";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component";
import {
  getCounty,
  getJudicialDistrict
} from "../form-common-options/form-common-options";

const farLeft = "11.28%";
const petitionerCheckboxLeft = "20.75%";
const attorneyTop = "33.00%";
const courtTypeTop = "37.00%";
const courtDistrictTop = "40.30%";
const caseInformationLeft = "54.00%";
const disagreementLeft = "17.9%";

export default function ReplyToStatement_Pdf({ data, renderData }) {
  const firstPageUrl =
    "/static/forms/reply-to-statement/03_Petitioner_Reply-1.png";
  const secondPageUrl =
    "/static/forms/reply-to-statement/03_Petitioner_Reply-2.png";
  const thirdPageUrl =
    "/static/forms/reply-to-statement/03_Petitioner_Reply-3.png";
  return (
    <>
      <RenderPage url={firstPageUrl}>
        {/* Personal Information */}
        <PositionedString debugKey="fullName" left={farLeft} top="14.06%">
          {`${renderData("person.firstName")} ${renderData(
            "person.middleName"
          )} ${renderData("person.lastName")}`}
        </PositionedString>
        <PositionedString
          dataKey="person.addressStreet"
          left={farLeft}
          top="17.46%"
        />
        <PositionedString
          debugKey="addressStreetCityZip"
          left={farLeft}
          top="20.86%"
        >
          {`${renderData("person.addressCity")} ${renderData(
            "person.addressState"
          )} ${renderData("person.addressZip")}`}
        </PositionedString>
        <PositionedString dataKey="person.phone" left={farLeft} top="24.26%" />
        <PositionedString dataKey="person.email" left={farLeft} top="28.16%" />

        {/* Petitioner information */}
        <PositionedCheckmark
          dataKey="person.petitionerRepresentative"
          left={petitionerCheckboxLeft}
          top="31.50%"
          shouldShow={data.person.petitionerRepresentative === "petitioner"}
        />
        <PositionedCheckmark
          dataKey="person.petitionerRepresentative"
          left={petitionerCheckboxLeft}
          top={attorneyTop}
          shouldShow={data.person.petitionerRepresentative === "attorney"}
        />
        <PositionedString
          dataKey="person.petitionerBarNumber"
          left="62.00%"
          top={attorneyTop}
        />

        {/* Case information */}
        <PositionedCheckmark
          dataKey="case.courtType"
          left="36.8%"
          top={courtTypeTop}
          shouldShow={data.case.courtType === "District"}
        />
        <PositionedCheckmark
          dataKey="case.courtType"
          left="48.2%"
          top={courtTypeTop}
          shouldShow={data.case.courtType === "Justice"}
        />
        <PositionedString
          debugKey="courtDistrict"
          left="25.9%"
          top={courtDistrictTop}
        >
          {data.case.courtAddress &&
            getJudicialDistrict(data.case.courtAddress, data.case.courtType)}
        </PositionedString>
        <PositionedString
          debugKey="courtCounty"
          left="52.00%"
          top={courtDistrictTop}
        >
          {data.case.courtAddress &&
            getCounty(data.case.courtAddress, data.case.courtType)}
        </PositionedString>
        <PositionedString
          dataKey="case.courtAddress"
          left="27.8%"
          top="43.50%"
        />

        <PositionedString
          debugKey="petitionerFullName"
          left={farLeft}
          top="54.5%"
        >
          {`${renderData("person.firstName")} ${renderData(
            "person.middleName"
          )} ${renderData("person.lastName")}`}
        </PositionedString>
        <PositionedString
          dataKey="case.caseNumber"
          left={caseInformationLeft}
          top="54.5%"
        />
        <PositionedString
          dataKey="case.judgeName"
          left={caseInformationLeft}
          top="59.5%"
        />

        <PositionedString
          dataKey="case.opposingStatement"
          left={disagreementLeft}
          top="76.0%"
          style={{
            width: "71%",
            overflowWrap: "anywhere",
            lineHeight: "30px"
          }}
        />
      </RenderPage>

      <RenderPage url={secondPageUrl}>
        <PositionedString
          dataKey="case.disagreementReason"
          left={disagreementLeft}
          top="28.0%"
          style={{
            width: "71%",
            overflowWrap: "anywhere",
            lineHeight: "31px"
          }}
        />
      </RenderPage>

      <RenderPage url={thirdPageUrl} />
    </>
  );
}
