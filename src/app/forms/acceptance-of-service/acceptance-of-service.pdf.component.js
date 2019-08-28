import React from "react";
import RenderPage from "../render-page.component";
import PositionedString from "../pdf-rendering/positioned-string.component";

export default function AcceptanceOfService_Pdf({ renderData, data }) {
  return (
    <>
      <RenderPage url="/static/forms/acceptance-of-service/Acceptance_of_service-1.png">
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
        <PositionedString debugKey="petitioner" left="11.85%" top="49.7%">
          <div>
            {renderData("person.firstName")} {renderData("person.middleName")}{" "}
            {renderData("person.lastName")}
          </div>
        </PositionedString>
        <PositionedString dataKey="case.caseNumber" left="54.05%" top="49.7%" />
        <PositionedString dataKey="case.judgeName" left="54.05%" top="54.4%" />
      </RenderPage>
    </>
  );
}
