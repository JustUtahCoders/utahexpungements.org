import React from 'react'
import {Scoped} from 'kremling'
import TextInput from '../inputs/text-input.component.js'
import FormThatPrints from '../inputs/form-that-prints.component.js'

export default class ApplicationForCOE_Web extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <FormThatPrints>
          <TextInput dataKey="lastName" label="Last name" {...this.props} />
          <TextInput dataKey="firstName" label="First name" {...this.props} />
          <TextInput dataKey="middleName" label="Middle name" {...this.props} />
          <TextInput dataKey="birthday" label="Birthday (will be fancier datepicker input in future)" {...this.props} />
          <TextInput dataKey="previouslyUsedNames" label="Previously used names" {...this.props} />
          <TextInput dataKey="mailingAddress" label="Mailing address" {...this.props} />
          <input type="submit" value="Print Form" />
        </FormThatPrints>
      </Scoped>
    )
  }
}

const css = `
`
