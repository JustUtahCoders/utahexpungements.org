import React from 'react'
import FormThatPrints from '../inputs/form-that-prints.component.js'
import TextInput from '../inputs/text-input.component.js'
import Select from '../inputs/select.component.js'

const petitionerRepresentativeOptions = [
  {label: 'Yes. I am the petitioner.', value: 'petitioner'},
  {label: 'No. I am an attorney representing the petitioner.', value: 'attorney'},
]

export default class PetitionForConviction_Web extends React.Component {
  render() {
    return (
      <FormThatPrints>
        <TextInput dataKey="person.lastName" label="Last name" {...this.props} />
        <TextInput dataKey="person.firstName" label="First name" {...this.props} />
        <TextInput dataKey="person.middleName" label="Middle name" {...this.props} />
        <TextInput dataKey="person.addressStreet" label="Street" {...this.props} />
        <TextInput dataKey="person.addressCity" label="City" {...this.props} />
        <TextInput dataKey="person.addressState" label="State" {...this.props} />
        <TextInput dataKey="person.addressZip" label="Zip" {...this.props} />
        <TextInput dataKey="person.dayPhone" label="Phone" {...this.props} />
        <TextInput dataKey="person.email" label="Email Address" {...this.props} />
        <Select dataKey="person.petitionerRepresentative" label="Are you filling this out for yourself?" options={petitionerRepresentativeOptions} {...this.props} />
        {this.props.data.petitionerRepresentative === 'attorney' &&
          <TextInput dataKey="person.barNumber" label="What is your Utah Bar number?" {...this.props} />
        }
        {/* TODO: Add in fields for the District, Justice Court, County and Judicial Court , needs clarity on particular data*/}
        <TextInput dataKey="case.addressCourtStreet" label="Court Address Street" {...this.props} />
        <TextInput dataKey="case.addressCourtCity" label="Court Address City" {...this.props} />
        <TextInput dataKey="case.addressCourtState" label="Court Address State" {...this.props} />
        <TextInput dataKey="case.addressCourtZip" label="Court Address Zip" {...this.props} />
        <TextInput dataKey="case.caseNumber" label="Case Number" {...this.props} />
        <TextInput dataKey="case.judgeName" label="Judge Full Name" {...this.props} />
        <input type="submit" value="Print Form" />
      </FormThatPrints>
    )
  }
}
