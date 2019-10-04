import React from "react";
import FormThatPrints from "../inputs/form-that-prints.component";
import Section from "../inputs/section.component";
import TextInput from "../inputs/text-input.component";

export default function OrderOnPetitionChargesNotFiled_Web({ data }) {
  return (
    <FormThatPrints>
      <Section name="1. Personal information">
        <TextInput dataKey="person.firstName" label="First name" />
      </Section>
    </FormThatPrints>
  );
}
