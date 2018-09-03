import React from 'react'
import DataContainer from '../forms/data-container.component.js'
import AppContext from '../../app-context.component.js'

export default class GovernmentForm extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context =>
          <DataContainer context={context}>
            {props => (
              <>
              <h1>{this.props.name}</h1>
              <this.props.WebForm {...props} />
              <this.props.PdfForm {...props} />
              </>
            )}
          </DataContainer>
        }
      </AppContext.Consumer>
    )
  }
}
