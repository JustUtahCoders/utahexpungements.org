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
const resolvedByLeft = "12.00%";
const hearingTop = "68.80%";
const courtOrdersLeaTop = "34.95%";
const certificateTop = "23.75%";
const serviceMethodLeft = "32.00%";
const serviceAddressLeft = "62.00%";

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
        <PositionedString debugKey="addressStreet" left={farLeft} top="17.46%">
          {renderData("person.addressStreet")}
        </PositionedString>
        <PositionedString
          debugKey="addressStreetCityZip"
          left={farLeft}
          top="20.86%"
        >
          {`${renderData("person.addressCity")} ${renderData(
            "person.addressState"
          )} ${renderData("person.addressZip")}`}
        </PositionedString>
        <PositionedString debugKey="phone" left={farLeft} top="24.26%">
          {renderData("person.phone")}
        </PositionedString>
        <PositionedString debugKey="email" left={farLeft} top="28.16%">
          {renderData("person.email")}
        </PositionedString>

        {/* Case information */}
        <PositionedCheckmark
          debugKey="courtTypeDistrict"
          dataKey="case.courtType"
          left="37.35%"
          top={courtTypeTop}
          shouldShow={data.case.courtType === "District"}
        />
        <PositionedCheckmark
          debugKey="courtTypeJustice"
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
          debugKey="caseNumber"
          left={caseInformationLeft}
          top="50.50%"
        >
          {renderData("case.caseNumber")}
        </PositionedString>
        <PositionedString
          debugKey="judgeFullName"
          left={caseInformationLeft}
          top="55.1%"
        >
          {renderData("case.judgeName")}
        </PositionedString>
        <PositionedCheckmark
          debugKey="resolvedByPleadings"
          left={resolvedByLeft}
          top="65.50%"
          shouldShow={data.case.resolvedBy === "Pleadings"}
        />
        <PositionedCheckmark
          debugKey="resolvedByHearing"
          left={resolvedByLeft}
          top={hearingTop}
          shouldShow={data.case.resolvedBy === "Hearing"}
        />
        <PositionedString debugKey="hearingDate" left="31.00%" top={hearingTop}>
          {renderData("case.hearingDate")}
        </PositionedString>
      </RenderPage>

      <RenderPage url={secondPageUrl}>
        <PositionedString debugKey="leaFileNumber" left="34.00%" top="22.40%">
          {renderData("resolution.leaFileNumber")}
        </PositionedString>
        <PositionedString debugKey="leaName" left="18.40%" top="24.95%">
          {renderData("resolution.leaName")}
        </PositionedString>
        <PositionedString
          debugKey="leaFileNumber"
          left="28.65%"
          top={courtOrdersLeaTop}
        >
          {renderData("resolution.leaFileNumber")}
        </PositionedString>
        <PositionedString
          debugKey="leaName"
          left="67.25%"
          top={courtOrdersLeaTop}
        >
          {renderData("resolution.leaName")}
        </PositionedString>
        <PositionedString debugKey="resolutionDate" left={farLeft} top="79.90%">
          {renderData("resolution.date")}
        </PositionedString>
        {/* Is this going to be the same judge? */}
        <PositionedString
          debugKey="resolutionJudgeFullName"
          left="53.50%"
          top="82.60%"
        >
          {renderData("case.judgeName")}
        </PositionedString>
      </RenderPage>

      <RenderPage url={thirdPageUrl}>
        {/* Service Address */}
        <PositionedString
          debugKey="certificateProsecutorFullName"
          left={farLeft}
          top={certificateTop}
        >
          {renderData("certificate.prosecutorFullName")}
        </PositionedString>
        <PositionedCheckmark
          debugKey="serviceByMail"
          left={serviceMethodLeft}
          top="23.50%"
          shouldShow={
            data.certificate && data.certificate.serviceMethod === "Mail"
          }
        />
        <PositionedCheckmark
          debugKey="serviceByHandDelivery"
          left={serviceMethodLeft}
          top="24.90%"
          shouldShow={
            data.certificate &&
            data.certificate.serviceMethod === "Hand Delivery"
          }
        />
        <PositionedCheckmark
          debugKey="serviceByEFile"
          left={serviceMethodLeft}
          top="26.30%"
          shouldShow={
            data.certificate && data.certificate.serviceMethod === "E-filed"
          }
        />
        <PositionedCheckmark
          debugKey="serviceByEmail"
          left={serviceMethodLeft}
          top="27.70%"
          shouldShow={
            data.certificate && data.certificate.serviceMethod === "Email"
          }
        />
        <PositionedCheckmark
          debugKey="serviceByLeftAtBusiness"
          left={serviceMethodLeft}
          top="29.10%"
          shouldShow={
            data.certificate &&
            data.certificate.serviceMethod === "Left at business"
          }
        />
        <PositionedString
          debugKey="certificateServiceAddressStreet"
          left={serviceAddressLeft}
          top={certificateTop}
        >
          {renderData("certificate.serviceAddressStreet")}
        </PositionedString>
        <PositionedString
          debugKey="certificateServiceAddressCity"
          left={serviceAddressLeft}
          top="25.00%"
        >
          {renderData("certificate.serviceAddressCity")}
        </PositionedString>
        <PositionedString
          debugKey="certificateServiceAddressState"
          left={serviceAddressLeft}
          top="26.25%"
        >
          {renderData("certificate.serviceAddressState")}
        </PositionedString>
        <PositionedString
          debugKey="certificateServiceAddressZip"
          left={serviceAddressLeft}
          top="27.50%"
        >
          {renderData("certificate.serviceAddressZip")}
        </PositionedString>
        <PositionedString
          debugKey="certificateServiceDate"
          left="79.40%"
          top={certificateTop}
        >
          {renderData("certificate.serviceDate")}
        </PositionedString>

        {/* User's signature */}
        <PositionedString
          debugKey="certificateDate"
          left={farLeft}
          top="33.90%"
        >
          {renderData("certificate.signDate")}
        </PositionedString>
        <PositionedString
          debugKey="certificateFullName"
          left="62.00%"
          top="37.70%"
        >
          {`${renderData("person.firstName")} ${renderData(
            "person.middleName"
          )} ${renderData("person.lastName")}`}
        </PositionedString>
      </RenderPage>
    </>
  );
}
