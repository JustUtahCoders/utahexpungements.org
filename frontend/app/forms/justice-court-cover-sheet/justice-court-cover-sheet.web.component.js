import React from "react";
import FormThatPrints from "../inputs/form-that-prints.component";
import Section from "../inputs/section.component";
import TextInput from "../inputs/text-input.component.js";
import { petitionerRepresentativeOptions } from "../form-common-options/form-common-options";
import Radio from "../inputs/radio.component.js";

export default function JusticeCourtCoverSheet_Web({ data }) {
  return (
    <FormThatPrints>
      <Section name="1. Personal information">
        <TextInput dataKey="person.firstName" label={__("first name")} />
        <TextInput dataKey="person.middleName" label={__("middle name")} />
        <TextInput dataKey="person.lastName" label={__("last name")} />
        <TextInput dataKey="person.addressStreet" label={__("street")} />
        <TextInput dataKey="person.addressCity" label={__("city")} />
        <TextInput dataKey="person.addressState" label={__("state")} />
        <TextInput dataKey="person.addressZip" label={__("zip")} />

        <TextInput dataKey="person.homePhone" label={__("phone")} />
        <TextInput dataKey="person.email" label={__("email address")} />

        <Radio
          dataKey="coversheet.isAttorney"
          label="Are you the petitioner?"
          options={petitionerRepresentativeOptions}
        />
        {data.coversheet && data.coversheet.isAttorney === "attorney" && (
          <>
            <TextInput
              dataKey="person.petitionerAttorneyName"
              label="Attorney Name"
            />
            <TextInput
              dataKey="person.petitionerBarNumber"
              label="Attorney Bar Number"
            />
          </>
        )}
      </Section>
    </FormThatPrints>
  );
}
