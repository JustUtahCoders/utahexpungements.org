import React from 'react'
import DataContainer from '../forms/data-container.component.js'

export default class GovernmentForm extends React.Component {
  render() {
    return (
      <DataContainer>
        {props => (
          <>
            <h1>{this.props.name}</h1>
            <this.props.WebForm {...props} />
            <this.props.PdfForm {...props} />
          </>
        )}
      </DataContainer>
    )
  }
}
