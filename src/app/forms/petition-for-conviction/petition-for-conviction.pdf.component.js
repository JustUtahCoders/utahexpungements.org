import React from "react";
import moment from "moment";
import RenderPage from "../render-page.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";

var JudicialDistrict = "";
function judicial(value) {
  switch (value) {
    case "Box Elder":
    case "Rich":
    case "Cache":
      JudicialDistrict = "First";
      break;
    case "Davis":
    case "Morgan":
    case "Weber":
      JudicialDistrict = "Second";
      break;
    case "Salt Lake":
    case "Summit":
    case "Tooele":
      JudicialDistrict = "Third";
      break;
    case "Juab":
    case "Millard":
    case "Utah":
    case "Wasatch":
      JudicialDistrict = "Fourth";
      break;
    case "Beaver":
    case "Iron":
    case "Washington":
      JudicialDistrict = "Fifth";
      break;
    case "Garfield":
    case "Kane":
    case "Piute":
    case "Sanpete":
    case "Sevier":
    case "Wayne":
      JudicialDistrict = "Sixth";
      break;
    case "Carbon":
    case "Emery":
    case "Grand":
    case "San Juan":
      JudicialDistrict = "Seventh";
      break;
    case "Daggett":
    case "Duchesne":
    case "Uintah":
      JudicialDistrict = "Eighth";
      break;
  }
  return JudicialDistrict;
}

export default class PetitionForConviction_Pdf extends React.Component {
  render() {
    const { data, renderData } = this.props;

    return (
      <>
        <RenderPage url="/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-1.png">
          <PositionedString debugKey="name" left={farLeft} top="14.06%">
            {`${renderData("person.firstName")} ${renderData(
              "person.middleName"
            )} ${renderData("person.lastName")}`}
          </PositionedString>

          <PositionedString
            debugKey="streetAddress"
            dataKey="person.addressStreet"
            left={farLeft}
            top="17.50%"
          />

          <PositionedString debugKey="lineAddress" left={farLeft} top="20.90%">
            {`${renderData("person.addressCity")} ${renderData(
              "person.addressState"
            )} ${renderData("person.addressZip")}`}
          </PositionedString>

          <PositionedString
            debugKey="dayphone"
            dataKey="person.dayPhone"
            left={farLeft}
            top="24.45%"
          />

          <PositionedString
            debugKey="email"
            dataKey="person.email"
            left={farLeft}
            top="27.95%"
          />

          <PositionedCheckmark
            debugKey="petitionerRepresentingThemself"
            left={petRepLeft}
            top="31%"
            shouldShow={data.person.petitionerRepresentative === "petitioner"}
          />

          <PositionedCheckmark
            debugKey="petitionerHasAttorney"
            left={petRepLeft}
            top="32.75%"
            shouldShow={data.person.petitionerRepresentative === "attorney"}
          />

          <PositionedString
            debugKey="barnumber"
            dataKey="person.petitionerBarNumber"
            left={barNumberLeft}
            top="32.75%"
          />

          <PositionedCheckmark
            debugKey="caseCourtType"
            left="37.5%"
            top="36.5%"
            shouldShow={data.case.courtType === "District"}
          />

          <PositionedCheckmark
            debugKey="caseCourtType"
            left="47.9%"
            top="36.6%"
            shouldShow={data.case.courtType === "Justice"}
          />

          <PositionedString
            debugKey="county"
            dataKey="case.county"
            left="50.90%"
            top="39.75%"
          />

          <PositionedString left="26.1%" top="39.75%" debugKey="county">
            {this.props.data.case.county
              ? judicial(this.props.data.case.county)
              : null}
          </PositionedString>

          <PositionedString debugKey="addressCourt" left="27.8%" top="43.1%">
            {`${renderData("case.addressCourtStreet")}, ${renderData(
              "case.addressCourtCity"
            )}, ${renderData("case.addressCourtState")} ${renderData(
              "case.addressCourtZip"
            )}`}
          </PositionedString>

          <PositionedString debugKey="petitionerName" left="11.9%" top="52.9%">
            {`${renderData("person.firstName")} ${renderData(
              "person.middleName"
            )} ${renderData("person.lastName")}`}
          </PositionedString>

          <PositionedString
            debugKey="casenumber"
            dataKey="case.caseNumber"
            left="54.1%"
            top="52.9%"
          />

          <PositionedString
            debugKey="judgename"
            dataKey="case.judgeName"
            left="54.1%"
            top="57.5%"
          />

          <PositionedString
            debugKey="caseNumberConviction"
            dataKey="case.caseNumber"
            left="17.4%"
            top="65.5%"
          />

          <PositionedString
            debugKey="publicinterest"
            dataKey="case.publicInterest"
            left="17.4%"
            top="78%"
            style={{
              width: "74%",
              height: "15%",
              lineHeight: "30px",
              overflowY: "hidden"
            }}
          />
        </RenderPage>

        <RenderPage url="/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-2.png">
          <PositionedString debugKey="todaysDate" left="54.4%" top="39.7%">
            {moment().format("L")}
          </PositionedString>

          <PositionedString debugKey="printedName" left="54.4%" top="36.5%">
            {`${renderData("person.firstName")} ${renderData(
              "person.middleName"
            )} ${renderData("person.lastName")}`}
          </PositionedString>
        </RenderPage>
      </>
    );
  }
}

const farLeft = `11.28%`;
const petRepLeft = `20.82%`;
const barNumberLeft = `62.2%`;
