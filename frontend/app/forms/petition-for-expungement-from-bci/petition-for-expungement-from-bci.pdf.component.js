import React from "react";
import RenderPage from "../render-page.component";
import PositionedString from "../pdf-rendering/positioned-string.component";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import {
  getJudicialDistrict,
  getCounty
} from "../form-common-options/form-common-options";

export default function PetitionForExpungementFromBci_Pdf({
  renderData,
  data
}) {
  return (
    <>
      <RenderPage url="/static/forms/petition-for-expungement-from-bci/08_Order-special_certificate-1.png">
        <PositionedString
          debugKey="person.fullName"
          left={personalInfo}
          top="13.8%"
        >
          <div>
            {renderData("person.firstName")} {renderData("person.middleName")}{" "}
            {renderData("person.lastName")}
          </div>
        </PositionedString>
        <PositionedString
          dataKey="person.addressStreet"
          left={personalInfo}
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
        <PositionedString
          dataKey="person.homePhone"
          left={personalInfo}
          top="24.5%"
        />
        <PositionedString
          dataKey="person.email"
          left={personalInfo}
          top="28.1%"
        />
        <PositionedString debugKey="petitioner" left={personalInfo} top="50.1%">
          <div>
            {renderData("person.firstName")} {renderData("person.middleName")}{" "}
            {renderData("person.lastName")}
          </div>
        </PositionedString>
        <PositionedString dataKey="case.caseNumber" left="54.05%" top="50.1%" />
        <PositionedString dataKey="case.judgeName" left="54.05%" top="55%" />
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
      </RenderPage>
      <RenderPage url="/static/forms/petition-for-expungement-from-bci/08_Order-special_certificate-2.png">
        {data.case.chargesFiled ? (
          <>
            <PositionedCheckmark
              debugKey="concludesCaseNumberCheck"
              left={page2Checkmarks}
              top="19.2%"
              shouldShow={true}
            />
            <PositionedString
              dataKey="case.caseNumber"
              left="53.05%"
              top="21%"
            />
            <PositionedCheckmark
              debugKey="ordersCaseNumberCheck"
              left={page2Checkmarks}
              top="35.1%"
              shouldShow={true}
            />
            <PositionedString
              dataKey="case.caseNumber"
              left="43.65%"
              top="37.7%"
            />
          </>
        ) : (
          <>
            <PositionedCheckmark
              debugKey="concludesLeaCheck"
              left={page2Checkmarks}
              top="25.9%"
              shouldShow={true}
            />
            <PositionedString
              dataKey="case.leaFileNumber"
              left="17.75%"
              top="27.7%"
            />
            <PositionedString
              dataKey="case.leaName"
              left="56.75%"
              top="27.7%"
            />
            <PositionedCheckmark
              debugKey="ordersLeaCheck"
              left={page2Checkmarks}
              top="41.9%"
              shouldShow={true}
            />
            <PositionedString
              dataKey="case.leaFileNumber"
              left="17.75%"
              top="44.3%"
            />
            <PositionedString
              dataKey="case.leaName"
              left="56.75%"
              top="44.3%"
            />
          </>
        )}
      </RenderPage>
      <RenderPage url="/static/forms/petition-for-expungement-from-bci/08_Order-special_certificate-3.png" />
    </>
  );
}

const personalInfo = `11.5%`;
const courtTypeTop = `34.2%`;
const countyDistrictTop = `37.35%`;
const page2Checkmarks = `18.15%`;
