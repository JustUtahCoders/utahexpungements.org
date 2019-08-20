import React from "react";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import TextInput from "../inputs/text-input.component.js";
import TextArea from "../inputs/text-area.component.js";
import Select from "../inputs/select.component.js";
import Checkbox from "../inputs/checkbox.component.js";
import Radio from "../inputs/radio.component.js";
import {
  courtTypeOptions,
  countyOptions
} from "../form-common-options/form-common-options";

export default class DraftCourtOrderConviction_Web extends React.Component {
  render() {
    return (
      <FormThatPrints>
        <TextInput dataKey="person.lastName" label={__("last name")} />

        <TextInput dataKey="person.firstName" label={__("first name")} />

        <TextInput dataKey="person.middleName" label={__("middle name")} />

        <TextInput dataKey="person.addressStreet" label={__("street")} />

        <TextInput dataKey="person.addressCity" label={__("city")} />

        <TextInput dataKey="person.addressState" label={__("state")} />

        <TextInput dataKey="person.addressZip" label={__("zip")} />

        <TextInput dataKey="person.dayPhone" label={__("phone")} />

        <TextInput dataKey="person.email" label={__("email address")} />

        <Radio
          dataKey="case.courtType"
          label="Court Type"
          options={courtTypeOptions}
        />

        <Select dataKey="case.county" options={countyOptions} label="County" />

        <TextInput
          dataKey="case.addressCourtStreet"
          label={__("court address street")}
        />

        <TextInput
          dataKey="case.addressCourtCity"
          label={__("court address city")}
        />

        <TextInput
          dataKey="case.addressCourtState"
          label={__("court address state")}
        />

        <TextInput
          dataKey="case.addressCourtZip"
          label={__("court address zip")}
        />

        <TextInput dataKey="case.caseNumber" label={__("case number")} />

        <TextInput dataKey="case.judgeName" label={__("judge full name")} />
      </FormThatPrints>
    );
  }
}
