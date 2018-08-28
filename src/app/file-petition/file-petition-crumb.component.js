import React from 'react'
import {Route} from 'react-router-dom'
import Breadcrumb from '../breadcrumb.component.js'

export default class FilePetitionCrumb extends React.Component {
  render() {
    const baseUrl = this.baseUrl()

    return (
      <Route
        path={baseUrl}
        render={() => (
          <Breadcrumb
            name="Step 3: File a Petition"
            url={baseUrl}
            childCrumbs={
              <>
                <Route
                  path={baseUrl + '/petition-navigator'}
                  render={() => (
                    <>
                      {this.typesOfPetitionCrumb()}
                    </>
                  )}
                />
                <Route
                  path={baseUrl + '/petition-for-conviction'}
                  render={() => (
                    <>
                      {this.typesOfPetitionCrumb()}
                      <Breadcrumb
                        name="Conviction"
                        url={baseUrl + '/petition-for-conviction'}
                      />
                    </>
                  )}
                />
              </>
            }
          />
        )}
      />
    )
  }
  baseUrl = () => this.props.match.url + '/file-petition'
  typesOfPetitionCrumb = () => (
    <Breadcrumb
      name="Types of Petitions"
      url={this.baseUrl() + '/petition-navigator'}
    />
  )
}
