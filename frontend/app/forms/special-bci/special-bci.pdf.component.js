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
          debugKey="petitionerRepresentation"
          left={petitionerCheckboxLeft}
          top="31.50%"
          shouldShow={data.person.petitionerRepresentative === "petitioner"}
        />
        <PositionedCheckmark
          debugKey="attorneyRepresentation"
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
          debugKey="districtCourtType"
          left="37.65%"
          top={courtTypeTop}
          shouldShow={data.case.courtType === "District"}
        />
        <PositionedCheckmark
          debugKey="justiceCourtType"
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

        {/* Records of crimes without conviction */}
        <PositionedCheckmark
          debugKey="hasNoConviction"
          left="18%"
          top="68.6%"
          shouldShow={data.case.hasConviction === "No"}
        />
        <PositionedString
          dataKey="case.arrestedDate"
          left="39.5%"
          top="70.8%"
        />
        <PositionedString dataKey="case.leaName" left="19.0%" top="73.6%" />
        <PositionedString dataKey="case.leaFileNumber" left="50%" top="76%" />
        <PositionedCheckmark
          debugKey="wasNotFiled"
          left="23.8%"
          top="83%"
          shouldShow={data.case.wasFiled === "Yes"}
        />
        {/* Check with Tucker that this is the same case number */}
        {data.case.wasFiled && (
          <PositionedString
            left="23.8%"
            top="85.4%"
            shouldShow={data.case.wasFiled === "Yes"}
          />
        )}
      </RenderPage>

      <RenderPage url={secondPageUrl}>
        {/* Records of crimes without conviction continued */}
        <PositionedCheckmark
          debugKey="wasNotFiled"
          left="23.8%"
          top="13.5%"
          shouldShow={data.case.wasFiled === "No"}
        />
        <PositionedCheckmark
          debugKey="hasNoConviction"
          left="23.8%"
          top="20.7%"
          shouldShow={data.case.hasConviction === "No"}
        />
        <PositionedCheckmark
          dataKey="case.thirtyDaysPassed"
          left="23.8%"
          top="23.2%"
        />
        <PositionedCheckmark
          dataKey="case.noArrestsSinceLast"
          left="23.8%"
          top="25.7%"
        />
        <PositionedCheckmark
          debugKey="oneOfTheFollowingOccurred"
          left="23.8%"
          top="28.2%"
          // if any of the options of the radio button are checked, this checkmark should show
          shouldShow={Boolean(data.case.chargeResolution)}
        />
        <PositionedCheckmark
          debugKey="noChargeFiled"
          left="29.7%"
          top="30.7%"
          shouldShow={data.case.chargeResolution === "noChargeFiled"}
        />
        <PositionedCheckmark
          debugKey="withPrejudice"
          left="29.7%"
          top="33.2%"
          shouldShow={data.case.chargeResolution === "withPrejudice"}
        />
        <PositionedCheckmark
          debugKey="atTrial"
          left="29.7%"
          top="37.5%"
          shouldShow={data.case.chargeResolution === "atTrial"}
        />

        {/* Records of crime with conviction */}
        <PositionedCheckmark
          debugKey="hasConviction"
          left="18.0%"
          top="41.5%"
          shouldShow={data.case.hasConviction === "Yes"}
        />
        {/* Check with Tucker that this is the same case number */}
        {data.case.hasConviction === "Yes" && (
          <PositionedString dataKey="case.caseNumber" left="70%" top="44.7%" />
        )}
        <PositionedCheckmark
          dataKey="case.wasNotSevereCrime"
          left="23.8%"
          top="49.7%"
        />
        <PositionedCheckmark
          dataKey="case.noCriminalCasePending"
          left="23.8%"
          top="62.3%"
        />
        <PositionedCheckmark
          dataKey="case.notConvictedOfCriminalEpisodes"
          left="23.8%"
          top="67.2%"
        />
        <PositionedCheckmark
          dataKey="case.hasPaidFines"
          left="23.8%"
          top="79.8%"
        />
        <PositionedCheckmark
          dataKey="case.timePeriodsHaveElapsed"
          left="23.8%"
          top="83.1%"
        />
      </RenderPage>

      <RenderPage url={thirdPageUrl}>
        {/* BCI Certificate */}
        <PositionedString
          dataKey="case.bciEligibilityCause"
          left="18.28%"
          top="32.4%"
          style={{
            width: "71%",
            overflowWrap: "anywhere",
            lineHeight: "29px"
          }}
        />

        {/* Public Interest Cause */}
        <PositionedString
          dataKey="case.publicInterestCause"
          left="18.28%"
          top="48%"
          style={{
            width: "71%",
            overflowWrap: "anywhere",
            lineHeight: "29px"
          }}
        />
      </RenderPage>
    </>
  );
}
