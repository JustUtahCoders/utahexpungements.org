import React from 'react';
import {Scoped} from 'kremling';
import TextInput from '../inputs/text-input.component.js';
import Select from '../inputs/select.component.js';
import TextArea from '../inputs/text-area.component.js';
import FormThatPrints from '../inputs/form-that-prints.component.js';
import Section from '../inputs/section.component.js';

const petitionerRepresentativeOptions = [
  {label: 'Yes. I am the petitioner.', value: 'petitioner'},
  {
    label: 'No. I am an attorney representing the petitioner.',
    value: 'attorney',
  },
];

const courtOptions = [
  {label: 'District', value: 'district'},
  {label: 'Justice Court of Utah', value: 'justice'},
];

const pryingQuestionOptions = [
  {
    label: 'I have not been diagnosted as having a substance abuse addiction.',
    value: 'no',
  },
  {
    label:
      'I have been diagnosed as having a substance abuse addiction and I am managing my addiction by:',
    value: 'yes',
  },
];

export default class PetitionForDrugConviction_Web extends React.Component {
  render() {
    console.log('this.props', this.props);
    return (
      <Scoped css={css}>
        <FormThatPrints>
          <Section name="1. Personal information">
            <TextInput
              dataKey="person.firstName"
              label="First name"
              {...this.props}
            />
            <TextInput
              dataKey="person.middleName"
              label="Middle name"
              {...this.props}
            />
            <TextInput
              dataKey="person.lastName"
              label="Last name"
              {...this.props}
            />
            <TextInput
              dataKey="person.addressStreet"
              label="Street"
              {...this.props}
            />
            <TextInput
              dataKey="person.addressCity"
              label="City"
              {...this.props}
            />
            <TextInput
              dataKey="person.addressState"
              label="State"
              {...this.props}
            />
            <TextInput
              dataKey="person.addressZip"
              label="Zip"
              {...this.props}
            />

            <TextInput
              dataKey="person.homePhone"
              label="Home Phone Number"
              {...this.props}
            />
            <TextInput dataKey="person.email" label="Email" {...this.props} />
            <Select
              dataKey="person.petitionerRepresentative"
              label={__('are you filling this out for yourself')}
              options={petitionerRepresentativeOptions}
              {...this.props}
            />

            <Select
              dataKey="case.courtType"
              label="In which court was the case"
              options={courtOptions}
              {...this.props}
            />
            <TextInput
              dataKey="case.judicialDistrict"
              label="Judicial District"
              {...this.props}
            />
            <TextInput dataKey="case.county" label="County" {...this.props} />
            <TextInput
              dataKey="case.courtAddress"
              label="Court Address"
              {...this.props}
            />
            <TextInput
              dataKey="case.petitioner"
              label="Petitioner Name"
              {...this.props}
            />
            <TextInput
              dataKey="case.number"
              label="Case Number"
              {...this.props}
            />
            <TextInput
              dataKey="case.judgeName"
              label="Judge Name"
              {...this.props}
            />
            <Select
              dataKey="drugConviction.pryingquestion"
              label="Choose One"
              options={pryingQuestionOptions}
              {...this.props}
            />
            {this.props.data.drugConviction &&
              this.props.data.drugConviction.pryingquestion === 'yes' && (
                <TextInput
                  dataKey="drugConviction.pryingquestionAnswer"
                  label="I am managing my addiction by:"
                  {...this.props}
                />
              )}

            <TextArea
              dataKey="case.publicInterest"
              label={__(
                "explain why expunging this crime is not contrary to the public's interest",
              )}
              {...this.props}
            />
          </Section>
        </FormThatPrints>
      </Scoped>
    );
  }
}

const css = `
`;
