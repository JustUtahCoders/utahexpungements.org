import React from "react";
import { Scoped } from "kremling";
import TextInput from "../inputs/text-input.component.js";
import Checkbox from "../inputs/checkbox.component.js";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import Select from "../inputs/select.component.js";
import Section from "../inputs/section.component.js";

const paymentOptions = [
  { label: `Check, money order, or Cashier's check`, value: "check" },
  { label: "Credit card (domestic only)", value: "creditCard" },
  { label: `Pay in person`, value: "payInPerson" }
];

const creditCardOptions = [
  { label: "Visa", value: "visa" },
  { label: "Mastercard", value: "mastercard" },
  { label: "Discover", value: "discover" },
  { label: "American Express", value: "amex" }
];

export default class ApplicationForCOE_Web extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <FormThatPrints>
          <Section name="1. Personal information">
            <TextInput
              dataKey="person.firstName"
              label={__("first name")}
              {...this.props}
            />
            <TextInput
              dataKey="person.middleName"
              label={__("middle name")}
              {...this.props}
            />
            <TextInput
              dataKey="person.lastName"
              label={__("last name")}
              {...this.props}
            />
            <TextInput
              dataKey="person.birthday"
              label={__("birthday")}
              {...this.props}
            />
            <TextInput
              dataKey="person.previouslyUsedNames"
              label={__("previously used names")}
              {...this.props}
            />
            <TextInput
              dataKey="person.addressStreet"
              label={__("street")}
              {...this.props}
            />
            <TextInput
              dataKey="person.addressCity"
              label={__("city")}
              {...this.props}
            />
            <TextInput
              dataKey="person.addressState"
              label={__("state")}
              {...this.props}
            />
            <TextInput
              dataKey="person.addressZip"
              label={__("zip")}
              {...this.props}
            />
            <TextInput
              dataKey="person.socialSecurity"
              label={__("social security number")}
              {...this.props}
            />
            <TextInput
              dataKey="person.driversLicenseNumber"
              label={__("drivers license #")}
              {...this.props}
            />
            <TextInput
              dataKey="person.driversLicenseState"
              label={__("drivers license state")}
              {...this.props}
            />
            <TextInput
              dataKey="person.homePhone"
              label={__("home phone")}
              {...this.props}
            />
            <TextInput
              dataKey="person.dayPhone"
              label={__("day phone")}
              {...this.props}
            />
          </Section>
          <Section name="2. Expungement Type">
            <Checkbox
              dataKey="case.isTrafficExpungement"
              label={__("is traffic expungement")}
              {...this.props}
            />
            <Checkbox
              dataKey="case.isAcquittalExpungement"
              label={__("is acquittal expungement")}
              {...this.props}
            />
          </Section>
          <Section name="3. Payment">
            <Select
              label="Payment method"
              dataKey="paymentMethod"
              options={paymentOptions}
              {...this.props}
            />
            {this.props.data.paymentMethod === "creditCard" && (
              <>
                <Select
                  label="Card issuer"
                  dataKey="creditCardIssuer"
                  options={creditCardOptions}
                  {...this.props}
                />
                <TextInput
                  dataKey="cardNumber"
                  label="Credit card number"
                  {...this.props}
                />
                <TextInput
                  dataKey="cardSecurityNumber"
                  label="Security code"
                  {...this.props}
                />
                <TextInput
                  dataKey="cardExpirationMonth"
                  label="Expiration month"
                  {...this.props}
                />
                <TextInput
                  dataKey="cardExpirationYear"
                  label="Expiration year"
                  {...this.props}
                />
                <TextInput
                  dataKey="nameOnCard"
                  label="Name on card"
                  {...this.props}
                />
                <TextInput
                  dataKey="cardZip"
                  label="Card zip code"
                  {...this.props}
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
