import React from "react";
import { Scoped } from "kremling";
import TextInput from "../inputs/text-input.component.js";
import Select from "../inputs/select.component.js";
import TextArea from "../inputs/text-area.component.js";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import Section from "../inputs/section.component.js";

const petitionerRepresentativeOptions = [
  { label: "Yes. I am the petitioner.", value: "petitioner" },
  {
    label: "No. I am an attorney representing the petitioner.",
    value: "attorney"
  }
];

const courtOptions = [
  { label: "District", value: "district" },
  { label: "Justice Court of Utah", value: "justice" }
];

const pryingQuestionOptions = [
  {
    label: "I have not been diagnosed as having a substance abuse addiction.",
    value: "no"
  },
  {
    label:
      "I have been diagnosed as having a substance abuse addiction and I am managing my addiction by:",
    value: "yes"
  }
];

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

            <TextInput dataKey="person.homePhone" label="Home Phone Number" />
            <TextInput dataKey="person.email" label="Email" />
            <Select
              dataKey="person.petitionerRepresentative"
              label={__("are you filling this out for yourself")}
              options={petitionerRepresentativeOptions}
            />

            <Select
              dataKey="case.courtType"
              label="In which court was the case"
              options={courtOptions}
            />
            <TextInput
              dataKey="case.judicialDistrict"
              label="Judicial District"
            />
            <TextInput dataKey="case.county" label="County" {...this.props} />
            <TextInput dataKey="case.courtAddress" label="Court Address" />
            <TextInput dataKey="case.number" label="Case Number" />
            <TextInput dataKey="case.judgeName" label="Judge Name" />
            <Select
              dataKey="drugConviction.pryingQuestion"
              label="Choose One"
              options={pryingQuestionOptions}
            />
            {this.props.data.drugConviction &&
              this.props.data.drugConviction.pryingQuestion === "yes" && (
                <TextInput
                  dataKey="drugConviction.pryingQuestionAnswer"
                  label="I am managing my addiction by:"
                />
              )}

            <TextArea
              dataKey="case.publicInterest"
              label={__(
                "explain why expunging this crime is not contrary to the public's interest"
              )}
            />
          </Section>
        </FormThatPrints>
      </Scoped>
    );
  }
}

const css = `
`;
