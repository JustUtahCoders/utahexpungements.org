import React from "react";
import RenderPage from "../render-page.component.js";
import { Scoped, a, m } from "kremling";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";

export default function ApplicationForPardon_Pdf({ renderData, data }) {
  return (
    <>
      <RenderPage url="/static/forms/application-for-pardon/PardonApplication-01.png" />
      <RenderPage url="/static/forms/application-for-pardon/PardonApplication-02.png">
        <Scoped css={css}>
          <PositionedString
            debugKey="personName"
            left="11.5%"
            top={line1Top}
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "55.47%"
            }}
          >
            <div>{renderData("person.lastName")}</div>
            <div>{renderData("person.firstName")}</div>
            <div>{renderData("person.middleName")}</div>
          </PositionedString>
          <PositionedString
            dataKey="person.birthday"
            left="81.76%"
            top={line1Top}
          />
          <PositionedString
            dataKey="person.previouslyUsedNames"
            left="42.88%"
            top="19.82%"
          />
          <PositionedString
            debugKey="mailingAddress"
            left="22.88%"
            top="22.73%"
          >
            {`${renderData("person.addressStreet")}, ${renderData(
              "person.addressCity"
            )}, ${renderData("person.addressState")} ${renderData(
              "person.addressZip"
            )}`}
          </PositionedString>
          <PositionedString
            dataKey="person.socialSecurity"
            left="21.18%"
            top={line4Top}
          />
          <PositionedString
            dataKey="person.driversLicenseNumber"
            left="65.06%"
            top={line4Top}
          />
          <PositionedString
            dataKey="person.driversLicenseState"
            left="85.00%"
            top={line4Top}
          />
          <PositionedString
            dataKey="person.homePhone"
            left="25.71%"
            top={line5Top}
          />
          <PositionedString
            dataKey="person.dayPhone"
            left="66.65%"
            top={line5Top}
          />
          <PositionedCheckmark
            dataKey="case.isTrafficExpungement"
            left="4.76%"
            top="31.6%"
          />
          <PositionedCheckmark
            dataKey="case.isAcquittalExpungement"
            left="4.76%"
            top="34.22%"
          />
          <PositionedString
            debugKey="nameOfPetitioner"
            left="6.05%"
            top="40.7%"
          >
            {renderData("person.firstName")} {renderData("person.lastName")}
          </PositionedString>
        </Scoped>
      </RenderPage>
    </>
  );
}

const line1Top = `15.61%`;
const line4Top = `26.73%`;
const line5Top = `29.93%`;

const css = `
`;
