import React from "react";
import { Scoped } from "kremling";
import TextInput from "../inputs/text-input.component.js";
import Select from "../inputs/select.component.js";
import Radio from "../inputs/radio.component.js";
import TextArea from "../inputs/text-area.component.js";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import Section from "../inputs/section.component.js";

export default class Coversheet_Web extends React.Component {
  render() {
    const { data } = this.props;

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

            <TextInput dataKey="person.homePhone" label="Home Phone Number" />
            <TextInput dataKey="person.email" label="Email" />

            <Radio
              dataKey="coversheet.isAttorney"
              label="Is an attorney filling out the form"
              options={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" }
              ]}
            />
            {data.coversheet && data.coversheet.isAttorney === "yes" && (
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
      </Scoped>
    );
  }
}

const css = `
`;
