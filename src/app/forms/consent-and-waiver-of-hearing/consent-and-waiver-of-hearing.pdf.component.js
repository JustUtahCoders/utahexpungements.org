import React from "react";
import { Scoped } from "kremling";
import RenderPage from "../render-page.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import { getJudicialDistrictFromCounty } from "../form-common-options/form-common-options";

export default class consentAndWaiverOfHearing_Pdf extends React.Component {
  render() {
    const { data, renderData } = this.props;

    return (
      <>
        <RenderPage url="/static/forms/consent-waiver-of-hearing/consent_waiver_of_hearing-1.png">
          <PositionedCheckmark
            dataKey="case.courtType"
            left="37.5%"
            top="34.1%"
            shouldShow={data.case.courtType === "District"}
          />

          <PositionedCheckmark
            dataKey="case.courtType"
            left="47.9%"
            top="34.1%"
            shouldShow={data.case.courtType === "Justice"}
          />

          <PositionedString dataKey="case.county" left="51.4%" top="37.35%" />
          {/* TODO: MAKE SURE THE COUNTY IS WORKING */}

          <PositionedString left="26.5%" top="37.35%" debugKey="county">
            {this.props.data.case.county
              ? getJudicialDistrictFromCounty(this.props.data.case.county)
              : null}
          </PositionedString>

          <PositionedString debugKey="addressCourt" left="27.8%" top="39.8%">
            {`${renderData("case.addressCourtStreet")},
              ${renderData("case.addressCourtCity")},
              ${renderData("case.addressCourtState")},
              ${renderData("case.addressCourtZip")}`}
          </PositionedString>

          <PositionedString debugKey="petitionerName" left="12.5%" top="50.2%">
            {`${renderData("person.firstName")},
              ${renderData("person.middleName")},
              ${renderData("person.lastName")}`}
          </PositionedString>

          <PositionedString dataKey="case.caseNumber" left="54.1%" top="50.5%">
            {`${renderData("case.caseNumber")}`}
          </PositionedString>

          <PositionedString dataKey="case.judgeName" left="54.1%" top="55.1%">
            {`${renderData("case.judgeName")}`}
          </PositionedString>

          <PositionedCheckmark dataKey="" left="" top="" />

          <PositionedCheckmark dataKey="" left="" top="" />

          <PositionedCheckmark dataKey="" left="" top="" />

          <PositionedCheckmark dataKey="" left="" top="" />
        </RenderPage>

        <RenderPage url="/static/forms/consent-waiver-of-hearing/consent_waiver_of_hearing-2.png">
          <PositionedCheckmark dataKey="" left="" top="" />
          <PositionedCheckmark dataKey="" left="" top="" />
          {/* TODO: IS THIS FOR THE PROSECUTOR TOO? */}
        </RenderPage>
      </>
    );
  }
}

const farLeft = `11.28%`;
