import React from "react";
import RenderPage from "../render-page.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";

export default function MotionToReduceConviction_Pdf({ renderData, data }) {
  return (
    <>
      <RenderPage url="/static/forms/motion-to-reduce-conviction/01_Motion_to_Reduce_Conviction-1.png">
        <PositionedString debugKey="person.fullName" left="10.5%" top="14.1%">
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
          left="20.82%"
          top="62.2%"
          shouldShow={data.person.petitionerRepresentative === "petitioner"}
        />
        <PositionedCheckmark
          dataKey="person.petitionerRepresentative"
          left="20.82%"
          top="33.1%"
          shouldShow={data.person.petitionerRepresentative === "attorney"}
        />
      </RenderPage>
    </>
  );
}
