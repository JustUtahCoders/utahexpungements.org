import React from "react";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import TextInput from "../inputs/text-input.component.js";
import Select from "../inputs/select.component.js";
import Radio from "../inputs/radio.component.js";
import Section from "../inputs/section.component.js";

import {
  courtTypeOptions,
  countyOptions,
  getCourtOptions
} from "../form-common-options/form-common-options";

export default class DraftCourtOrderConviction_Web extends React.Component {
  render() {
    return (
      <FormThatPrints>
        <Section name="1. Personal Information">
          <TextInput dataKey="person.lastName" label={__("last name")} />

          <TextInput dataKey="person.firstName" label={__("first name")} />

          <TextInput dataKey="person.middleName" label={__("middle name")} />

          <TextInput dataKey="person.addressStreet" label={__("street")} />

          <TextInput dataKey="person.addressCity" label={__("city")} />

          <TextInput dataKey="person.addressState" label={__("state")} />

          <TextInput dataKey="person.addressZip" label={__("zip")} />

          <TextInput dataKey="person.dayPhone" label={__("phone")} />

          <TextInput dataKey="person.email" label={__("email address")} />
        </Section>

        <Section name="2. Court Information">
          <Radio
            dataKey="case.courtType"
            label="Court Type"
            options={courtTypeOptions}
          />

          <Select
            dataKey="case.county"
            options={countyOptions}
            label="County"
          />

          {!!this.props.data.case.courtType &&
            !!this.props.data.case.county && (
              <Select
                label="Court Address"
                dataKey="case.courtAddress"
                options={getCourtOptions(
                  this.props.data.case.courtType,
                  this.props.data.case.county
                )}
              />
            )}

          <TextInput dataKey="case.caseNumber" label={__("case number")} />

          <TextInput dataKey="case.judgeName" label={__("judge full name")} />
          <small className="web-form-input">
            *Not necessary but nice to have
          </small>
        </Section>
      </FormThatPrints>
    );
  }
}
