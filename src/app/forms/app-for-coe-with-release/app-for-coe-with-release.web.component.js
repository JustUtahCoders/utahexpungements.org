import React from 'react'
import FormThatPrints from '../inputs/form-that-prints.component.js'
import Section from '../inputs/section.component.js'
import TextInput from '../inputs/text-input.component.js'
import Select from '../inputs/select.component.js'
import Checkbox from '../inputs/checkbox.component.js'

const petitionerRepresentativeOptions = [
  {label: `Yes. I'd like documents to be sent to someone besides myself`, value: 'someone-else-is-recipient'},
  {label: `No. I'd like documents to be sent to me directly`, value: 'petitioner-is-recipient'},
]

export default class AppForCOENoFees_Web extends React.Component {
  render() {
    return (
      <FormThatPrints>
        <Section name="1. Third Party Release Form">
          <Select dataKey="person.coeRecipient" label={__("coe recipient explanation")} options={petitionerRepresentativeOptions} {...this.props} />
          {this.props.data.person.coeRecipient === 'someone-else-is-recipient' &&
            <>
              <TextInput dataKey="person.coeRecipientName" label={__("coe recipient name")} {...this.props} />
              <TextInput dataKey="person.coeRecipientAgency" label={__("coe recipient agency")} {...this.props} />
              <TextInput dataKey="person.coeRecipientStreet" label={__("street")} {...this.props} />
              <TextInput dataKey="person.coeRecipientCity" label={__("city")} {...this.props} />
              <TextInput dataKey="person.coeRecipientState" label={__("state")} {...this.props} />
              <TextInput dataKey="person.coeRecipientZip" label={__("zip")} {...this.props} />
            </>
          }
        </Section>
        <Section name="2. Personal information">
          <TextInput dataKey="person.firstName" label={__("first name")} {...this.props} />
          <TextInput dataKey="person.middleName" label={__("middle name")} {...this.props} />
          <TextInput dataKey="person.lastName" label={__("last name")} {...this.props} />
          <TextInput dataKey="person.birthday" label={__("birthday")} {...this.props} />
          <TextInput dataKey="person.previouslyUsedNames" label={__("previously used names")} {...this.props} />
          <TextInput dataKey="person.addressStreet" label={__("street")} {...this.props} />
          <TextInput dataKey="person.addressCity" label={__("city")} {...this.props} />
          <TextInput dataKey="person.addressState" label={__("state")} {...this.props} />
          <TextInput dataKey="person.addressZip" label={__("zip")} {...this.props} />
          <TextInput dataKey="person.socialSecurity" label={__("social security number")} {...this.props} />
          <TextInput dataKey="person.driversLicenseNumber" label={__("drivers license #")} {...this.props} />
          <TextInput dataKey="person.driversLicenseState" label={__("drivers license state")} {...this.props} />
          <TextInput dataKey="person.homePhone" label={__("home phone")} {...this.props} />
          <TextInput dataKey="person.dayPhone" label={__("day phone")} {...this.props} />
        </Section>
        <Section name="3. Expungement Type">
          <Checkbox dataKey="case.isTrafficExpungement" label={__("is traffic expungement")} {...this.props} />
          <Checkbox dataKey="case.isAcquittalExpungement" label={__("is acquittal expungement")} {...this.props} />
        </Section>
      </FormThatPrints>
    )
  }
}
