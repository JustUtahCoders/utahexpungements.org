import React from "react";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import Section from "../inputs/section.component.js";
import TextInput from "../inputs/text-input.component.js";
import Select from "../inputs/select.component.js";
import Checkbox from "../inputs/checkbox.component.js";

const petitionerRepresentativeOptions = [
  {
    label: `Yes. I'd like documents to be sent to someone besides myself`,
    value: "someone-else-is-recipient"
  },
  {
    label: `No. I'd like documents to be sent to me directly`,
    value: "petitioner-is-recipient"
  }
];

export default class AppForCOENoFees_Web extends React.Component {
  render() {
    return (
      <FormThatPrints>
        <Section name="1. Third Party Release Form">
          <Select
            dataKey="person.coeRecipient"
            label={__("coe recipient explanation")}
            options={petitionerRepresentativeOptions}
          />
          {this.props.data.person.coeRecipient ===
            "someone-else-is-recipient" && (
            <>
              <TextInput
                dataKey="person.coeRecipientName"
                label={__("coe recipient name")}
              />
              <TextInput
                dataKey="person.coeRecipientAgency"
                label={__("coe recipient agency")}
              />
              <TextInput
                dataKey="person.coeRecipientStreet"
                label={__("street")}
              />
              <TextInput dataKey="person.coeRecipientCity" label={__("city")} />
              <TextInput
                dataKey="person.coeRecipientState"
                label={__("state")}
              />
              <TextInput dataKey="person.coeRecipientZip" label={__("zip")} />
            </>
          )}
        </Section>
        <Section name="2. Personal Information">
          <TextInput dataKey="person.firstName" label={__("first name")} />
          <TextInput dataKey="person.middleName" label={__("middle name")} />
          <TextInput dataKey="person.lastName" label={__("last name")} />
          <TextInput dataKey="person.birthday" label={__("birthday")} />
          <TextInput
            dataKey="person.previouslyUsedNames"
            label={__("previously used names")}
          />
          <TextInput dataKey="person.addressStreet" label={__("street")} />
          <TextInput dataKey="person.addressCity" label={__("city")} />
          <TextInput dataKey="person.addressState" label={__("state")} />
          <TextInput dataKey="person.addressZip" label={__("zip")} />
          <TextInput
            dataKey="person.socialSecurity"
            label={__("social security number")}
          />
          <TextInput
            dataKey="person.driversLicenseNumber"
            label={__("drivers license #")}
          />
          <TextInput
            dataKey="person.driversLicenseState"
            label={__("drivers license state")}
          />
          <TextInput dataKey="person.homePhone" label={__("home phone")} />
          <TextInput dataKey="person.dayPhone" label={__("day phone")} />
        </Section>
        <Section name="3. Expungement Type">
          <Checkbox
            dataKey="case.isTrafficExpungement"
            label={__("is traffic expungement")}
          />
          <Checkbox
            dataKey="case.isAcquittalExpungement"
            label={__("is acquittal expungement")}
          />
        </Section>
      </FormThatPrints>
    );
  }
}
