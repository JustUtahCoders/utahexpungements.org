import React from "react";
import FormThatPrints from "../inputs/form-that-prints.component";
import TextInput from "../inputs/text-input.component";
import Section from "../inputs/section.component.js";

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
        <TextInput dataKey="case.judgeName" label={__("judge full name")} />
      </Section>
    </FormThatPrints>
  );
}
