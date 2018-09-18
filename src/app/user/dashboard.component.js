import React from 'react'
import AppContext from '../../app-context.component.js'
import PeopleList from './people-list.component.js'

export default class Dashboard extends React.Component {
  render () {
    return (
      <AppContext.Consumer>
        {context => context.authUser &&
          <div>
            <h1>User Dashboard</h1>
            <p>Welcome, {context.authUser.email}.</p>
            {(context.activePerson && context.activeCase) &&
              <p>
                You are currently working on case <strong>{context.activeCase.name}</strong> for <strong>{context.activePerson.name}</strong>.
              </p>
            }
            <p>Choose a case to work on:</p>
            <PeopleList user={context.authUser} />
          </div>
        }
      </AppContext.Consumer>
    )
  }
}
