import React from 'react'
import AuthUserContext from '../../auth-user.component.js'

export default class Dashboard extends React.Component {
  render () {
    return (
      <AuthUserContext.Consumer>
        {authUser => authUser &&
          <div>
            <h1>User Dashboard</h1>
            <p>Welcome, {authUser.email}.</p>
          </div>
        }
      </AuthUserContext.Consumer>
    )
  }
}
