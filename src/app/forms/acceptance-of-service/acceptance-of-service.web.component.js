import React from "react";
import FormThatPrints from "../inputs/form-that-prints.component";
import TextInput from "../inputs/text-input.component";
import Section from "../inputs/section.component.js";
import Radio from "../inputs/radio.component.js";
import Select from "../inputs/select.component.js";
import {
  courtTypeOptions,
  countyOptions,
  getCourtOptions
} from "../form-common-options/form-common-options";

export default function AcceptanceOfService_Web(props) {
  return (
    <FormThatPrints>
      <Section name="1. Personal Information">
        <TextInput dataKey="person.firstName" label="First Name" />
        <TextInput dataKey="person.middleName" label={__("middle name")} />
        <TextInput dataKey="person.lastName" label="Last Name" />
        <TextInput dataKey="person.addressStreet" label={__("street")} />
        <TextInput dataKey="person.addressCity" label={__("city")} />
        <TextInput dataKey="person.addressState" label={__("state")} />
        <TextInput dataKey="person.addressZip" label={__("zip")} />
        <TextInput dataKey="person.homePhone" label={__("home phone")} />
        <TextInput dataKey="person.email" label={__("email address")} />
      </Section>
      <Section name="2. Case Information">
        <TextInput dataKey="case.caseNumber" label={__("case number")} />
        <Radio
          dataKey="case.courtType"
          label="Court Type"
          options={courtTypeOptions}
        />

        <Select dataKey="case.county" options={countyOptions} label="County" />

        {props.data.case.courtType && props.data.case.county && (
          <Select
            label="Court Address"
            dataKey="case.courtAddress"
            options={getCourtOptions(
              props.data.case.courtType,
              props.data.case.county
            )}
          />
        )}
        <TextInput dataKey="case.judgeName" label={__("judge full name")} />
      </Section>
    </FormThatPrints>
  );
}
