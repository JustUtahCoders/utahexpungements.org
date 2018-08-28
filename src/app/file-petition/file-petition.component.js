import React from 'react'
import { Route } from 'react-router-dom'
import PetitionOverview from './petition-overview.component'
import PetitionForm from './petition-form.component.js'
import PetitionNavigator from './petition-navigator.component.js'

export default class FilePetition extends React.Component {
  render() {
    return (
      <>
      <h1>
        File Petition
      </h1>
        <>
          <Route
            path={this.props.match.url}
            exact
            component={PetitionOverview}
          />
          <Route
            path={this.props.match.url + '/petition-navigator'}
            component={PetitionNavigator}
          />
          <Route
            path={this.props.match.url + '/file-petition'}
            component={PetitionForm}
          />
        </>
      </>
    )
  }
}

