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
const courtTypeTop = "36.4%";
const courtDistrictTop = "39.30%";
const caseInformationLeft = "54.00%";

export default function SpecialBci_Pdf({ data, renderData }) {
  const firstPageUrl =
    "/static/forms/special-bci/01_Petition_to_Expunge_Records_Criminal-special_certificate-1.png";
  const secondPageUrl =
    "/static/forms/special-bci/01_Petition_to_Expunge_Records_Criminal-special_certificate-2.png";
  const thirdPageUrl =
    "/static/forms/special-bci/01_Petition_to_Expunge_Records_Criminal-special_certificate-3.png";

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
          left="37.65%"
          top={courtTypeTop}
          shouldShow={data.case.courtType === "District"}
        />
        <PositionedCheckmark
          dataKey="case.courtType"
          left="47.8%"
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
          top="42.50%"
        />

        <PositionedString
          debugKey="petitionerFullName"
          left="12.8%"
          top="51.5%"
        >
          {`${renderData("person.firstName")} ${renderData(
            "person.middleName"
          )} ${renderData("person.lastName")}`}
        </PositionedString>
        <PositionedString
          dataKey="case.caseNumber"
          left={caseInformationLeft}
          top="51.5%"
        />
        <PositionedString
          dataKey="case.judgeName"
          left={caseInformationLeft}
          top="56.5%"
        />
      </RenderPage>

      <RenderPage url={secondPageUrl} />

      <RenderPage url={thirdPageUrl} />
    </>
  );
}
