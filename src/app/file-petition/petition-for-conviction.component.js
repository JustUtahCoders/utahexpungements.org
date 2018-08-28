import React from 'react'
import PetitionForConviction_Web from 'src/app/forms/petition-for-conviction/petition-for-conviction.web.component.js'
import PetitionForConviction_Pdf from 'src/app/forms/petition-for-conviction/petition-for-conviction.pdf.component.js'
import DataContainer from 'src/app/forms/data-container.component.js'

export default class PetitionForConviction extends React.Component {
  render() {
    return (
      <DataContainer>
        {props => (
          <>
            <PetitionForConviction_Web {...props} />
            <PetitionForConviction_Pdf {...props} />
          </>
        )}
      </DataContainer>
    )
  }
}
