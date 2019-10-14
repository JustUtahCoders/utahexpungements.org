import React from "react";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import Section from "../inputs/section.component.js";
import TextInput from "../inputs/text-input.component.js";
import Select from "../inputs/select.component.js";
import Checkbox from "../inputs/checkbox.component.js";
import Section from "../inputs/section.component.js";
import Radio from "../inputs/radio.component.js";
import {
  courtTypeOptions,
  countyOptions
} from "../form-common-options/form-common-options.js";

export default function ConsentAndWaiverOfHearing_Web(props) {
  return (
    <FormThatPrints>
      <Section name="1. Case Information">
        <Radio
          dataKey="case.courtType"
          label="Court Type"
          options={courtTypeOptions}
        />
        <Select dataKey="case.county" label="County" options={countyOptions} />
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
        {/* TODO: WHERE IS "PETIONER"? <TextInput dataKey="" label={__("petioner")}/>*/}
        <TextInput dataKey="case.caseNumber" label={__("case number")} />
        <TextInput dataKey="case.judgeName" label={__("judge full name")} />
      </Section>
      <Section name="2. Form Specifics">
        <Checkbox dataKey="" label="" options="" />
        <Checkbox dataKey="" label="" options="" />
        <Radio dataKey="" label="" options="" />
        <Radio dataKey="" label="" options="" />
        <Radio dataKey="" label="" options="" />
      </Section>
      {/*TODO: IS THIS FOR THE PROSECUTOR TOO?
      <Section name="3. Signature">
      </Section>*/}
    </FormThatPrints>
  );
}
