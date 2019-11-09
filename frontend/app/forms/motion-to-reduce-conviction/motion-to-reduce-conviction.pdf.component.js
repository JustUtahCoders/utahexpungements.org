import React from "react";
import RenderPage from "../render-page.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import {
  getJudicialDistrict,
  getCounty
} from "../form-common-options/form-common-options";

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
          left="20%"
          top="31.5%"
          shouldShow={data.person.petitionerRepresentative === "petitioner"}
        />
        <PositionedCheckmark
          dataKey="person.petitionerRepresentative"
          left="20%"
          top="33%"
          shouldShow={data.person.petitionerRepresentative === "attorney"}
        />
        <PositionedString
          dataKey="person.petitionerBarNumber"
          left="62%"
          top="33%"
        />
        <PositionedCheckmark
          dataKey="case.courtType"
          left="36%"
          top="36.9%"
          shouldShow={data.case.courtType === "District"}
        />
        <PositionedCheckmark
          dataKey="case.courtType"
          left="46.9%"
          top="36.9%"
          shouldShow={data.case.courtType === "Justice"}
        />
        <PositionedString dataKey="case.courtAddress" left="27.8%" top="43%" />
        <PositionedString left="25.9%" top="40.2%" debugKey="judicialDistrict">
          {data.case.courtAddress &&
            getJudicialDistrict(data.case.courtAddress, data.case.courtType)}
        </PositionedString>
        <PositionedString left="50.7%" top="40.2%" debugKey="county">
          {data.case.courtAddress &&
            getCounty(data.case.courtAddress, data.case.courtType)}
        </PositionedString>
        <PositionedString dataKey="case.caseNumber" left="54.1%" top="57.9%" />
        <PositionedString dataKey="case.judgeName" left="54.1%" top="62.5%" />
        <PositionedString dataKey="case.plaintiff" left="11%" top="50.7%" />
        <PositionedString dataKey="case.defendant" left="11%" top="58.1%" />
        {requestedConvictionDegreeInformation(
          data.case.convictionDegree,
          data.case.reducedConvictionDegree
        )}
      </RenderPage>
    </>
  );
}

function requestedConvictionDegreeInformation(degA, degB) {
  let degree = degreeStringToInt(degA);
  let requestedDegree = degreeStringToInt(degB);
  let isReduceByOneDeg = requestedDegree - degree > 1 ? false : true;

  return (
    <>
      <PositionedString
        dataKey="case.convictionDegree"
        left="38%"
        top={isReduceByOneDeg ? "71.5%" : "77%"}
      />
      <PositionedString
        dataKey="case.reducedConvictionDegree"
        left="22%"
        top={isReduceByOneDeg ? "74%" : "79.7%"}
      />
      <PositionedCheckmark
        debugKey="case.reducedConvictionDegreeDiff"
        left="18%"
        top={isReduceByOneDeg ? "71.5%" : "77.3%"}
        shouldShow={true}
      />
    </>
  );
}

function degreeStringToInt(degVal) {
  if (degVal === "First Degree") {
    return 1;
  } else if (degVal === "Second Degree") {
    return 2;
  } else {
    return 3;
  }
}
