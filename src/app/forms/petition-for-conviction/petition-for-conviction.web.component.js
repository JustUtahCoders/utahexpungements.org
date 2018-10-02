import React from 'react'
import FormThatPrints from '../inputs/form-that-prints.component.js'
import TextInput from '../inputs/text-input.component.js'
import TextArea from '../inputs/text-area.component.js'
import Select from '../inputs/select.component.js'

const petitionerRepresentativeOptions = [
  {label: 'Yes. I am the petitioner.', value: 'petitioner'},
  {label: 'No. I am an attorney representing the petitioner.', value: 'attorney'},
]

export default class PetitionForConviction_Web extends React.Component {
  render() {
    return (
      <FormThatPrints>
        <TextInput dataKey="person.lastName" label={__("last name")} {...this.props} />
        <TextInput dataKey="person.firstName" label={__("first name")} {...this.props} />
        <TextInput dataKey="person.middleName" label={__("middle name")} {...this.props} />
        <TextInput dataKey="person.addressStreet" label={__("street")} {...this.props} />
        <TextInput dataKey="person.addressCity" label={__("city")} {...this.props} />
        <TextInput dataKey="person.addressState" label={__("state")} {...this.props} />
        <TextInput dataKey="person.addressZip" label={__("zip")} {...this.props} />
        <TextInput dataKey="person.dayPhone" label={__("phone")} {...this.props} />
        <TextInput dataKey="person.email" label={__("email address")} {...this.props} />
        <Select dataKey="person.petitionerRepresentative" label={__("are you filling this out for yourself")} options={petitionerRepresentativeOptions} {...this.props} />
        {this.props.data.petitionerRepresentative === 'attorney' &&
          <TextInput dataKey="person.petitionerBarNumber" label="What is your Utah Bar number?" {...this.props} />
        }
        {/* TODO: Add in fields for the District, Justice Court, County and Judicial Court , needs clarity on particular data*/}
        <TextInput dataKey="case.addressCourtStreet" label={__("court address street")} {...this.props} />
        <TextInput dataKey="case.addressCourtCity" label={__("court address city")} {...this.props} />
        <TextInput dataKey="case.addressCourtState" label={__("court address state")} {...this.props} />
        <TextInput dataKey="case.addressCourtZip" label={__("court address zip")} {...this.props} />
        <TextInput dataKey="case.caseNumber" label={__("case number")} {...this.props} />
        <TextInput dataKey="case.judgeName" label={__("judge full name")} {...this.props} />
        <TextArea dataKey="case.publicInterest" label={__("explain why expunging this crime is not contrary to the public's interest")} {...this.props} />
      </FormThatPrints>
    )
  }
}
