import React from "react";
import RenderPage from "../render-page.component";
import PositionedString from "../pdf-rendering/positioned-string.component";

export default function AcceptanceOfService_Pdf({ renderData }) {
  return (
    <>
      <RenderPage url="/static/forms/acceptance-of-service/Acceptance_of_service-1.png">
        <PositionedString debugKey="person.fullName" left="11.5%" top="13.8%">
          <div>
            {renderData("person.firstName")} {renderData("person.lastName")}
          </div>
        </PositionedString>
      </RenderPage>
    </>
  );
}
