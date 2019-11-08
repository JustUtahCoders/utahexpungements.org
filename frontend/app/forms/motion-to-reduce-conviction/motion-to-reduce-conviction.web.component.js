import React from "react";
import FormThatPrints from "../inputs/form-that-prints.component";
import Section from "../inputs/section.component.js";
import TextInput from "../inputs/text-input.component";
import Select from "../inputs/select.component.js";
import {
  petitionerRepresentativeOptions,
  courtTypeOptions,
  JusticeCourtList,
  DistrictCourtList
} from "../form-common-options/form-common-options";

export default function MotionToReduceConviction_Web({ data }) {
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
        <Select
          dataKey="person.petitionerRepresentative"
          label={__("are you filling this out for yourself")}
          options={petitionerRepresentativeOptions}
        />
      </Section>
    </FormThatPrints>
  );
}
