import React from "react";
import { Scoped } from "kremling";
import TextInput from "../inputs/text-input.component.js";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import Section from "../inputs/section.component.js";

export default class MotionToWaiveFees_Web extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <FormThatPrints>
          <Section name="1. Personal information">
            <TextInput dataKey="person.firstName" label="First name" />
            <TextInput dataKey="person.middleName" label="Middle name" />
            <TextInput dataKey="person.lastName" label="Last name" />
          </Section>
        </FormThatPrints>
      </Scoped>
    );
  }
}

const css = `
`;
