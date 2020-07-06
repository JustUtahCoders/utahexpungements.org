import React from "react";
import {
  getJudicialDistrict,
  getCounty
} from "../form-common-options/form-common-options";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component";
import RenderPage from "../render-page.component";

const farLeft = "11.28%";
const courtTypeTop = "34.00%";
const courtDistrictTop = "37.40%";
const caseInformationLeft = "54.00%";
const hearingTop = "68.80%";

export default function OrderOnPetitionChargesNotFiled_Pdf({
  data,
  renderData
}) {
  const firstPageUrl =
    "/static/forms/order-on-petition-charges-never-filed/08_Order-charges_never_filed-1.png";
  const secondPageUrl =
    "/static/forms/order-on-petition-charges-never-filed/08_Order-charges_never_filed-2.png";
  const thirdPageUrl =
    "/static/forms/order-on-petition-charges-never-filed/08_Order-charges_never_filed-3.png";
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
          {`${renderData("person.addressCity")}, ${renderData(
            "person.addressState"
          )} ${renderData("person.addressZip")}`}
        </PositionedString>
        <PositionedString
          dataKey="person.dayPhone"
          left={farLeft}
          top="24.26%"
        />
        <PositionedString dataKey="person.email" left={farLeft} top="28.16%" />

        {/* Case information */}
        <PositionedCheckmark
          dataKey="case.courtType"
          left="37.35%"
          top={courtTypeTop}
          shouldShow={data.case.courtType === "District"}
        />
        <PositionedCheckmark
          dataKey="case.courtType"
          left="47.7%"
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
          top="39.75%"
        />
        <PositionedString
          debugKey="petitionerFullName"
          left="11.78%"
          top="50.40%"
        >
          {`${renderData("person.firstName")} ${renderData(
            "person.middleName"
          )} ${renderData("person.lastName")}`}
        </PositionedString>
        <PositionedString
          dataKey="case.caseNumber"
          left={caseInformationLeft}
          top="50.50%"
        />
        <PositionedString
          dataKey="case.judgeName"
          left={caseInformationLeft}
          top="55.1%"
        />
      </RenderPage>

      <RenderPage url={secondPageUrl}>
        <PositionedString dataKey="case.judgeName" left="53.50%" top="82.60%" />
      </RenderPage>

      <RenderPage url={thirdPageUrl} />
    </>
  );
}
