import React from 'react'
import {Route} from 'react-router-dom'
import Breadcrumb from '../breadcrumb.component.js'

export default class ScreeningToolCrumb extends React.Component {
  render() {
    console.log(111, this.props.match)

    const areYouEligibleRoute = this.props.match.url + '/are-you-eligible'
    return (
      <Route
        path={areYouEligibleRoute}
        render={() => (
          <Breadcrumb
            name="Step 1: Are you eligible?"
            url={areYouEligibleRoute}
            childCrumbs={
              <>
                <Breadcrumb
                  name="Do you have a Conviction?"
                  url={areYouEligibleRoute}
                />
                <Route
                  path={areYouEligibleRoute + '/pending'}
                  render={() => (
                    <Breadcrumb
                      name="Do you have a case pending?"
                      url={areYouEligibleRoute + '/pending'}
                    />
                  )}
                />
              </>
            }
          >
          </Breadcrumb>
        )}
      />
    )
  }
}
