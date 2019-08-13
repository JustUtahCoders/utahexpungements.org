import React from "react";
import { Scoped } from "kremling";
import TextInput from "../inputs/text-input.component.js";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import Section from "../inputs/section.component.js";

export default class PetitionForDrugConviction_Web extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <FormThatPrints>
          <Section name="1. Personal information">
            <TextInput dataKey="person.firstName" label="First name" />
            <TextInput dataKey="person.middleName" label="Middle name" />
            <TextInput dataKey="person.lastName" label="Last name" />
            <TextInput dataKey="person.addressStreet" label="Street" />
            <TextInput dataKey="person.addressCity" label="City" />
            <TextInput dataKey="person.addressState" label="State" />
            <TextInput dataKey="person.addressZip" label="Zip" />
            <TextInput dataKey="person.addressZip" label="Zip" />

            <TextInput dataKey="person.homePhone" label="Home Phone Number" />
          </Section>
        </FormThatPrints>
      </Scoped>
    );
  }
}

const css = `
`;
