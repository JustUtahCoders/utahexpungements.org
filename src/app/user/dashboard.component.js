import React from 'react'
import PeopleList from './people-list.component.js'
import {Link} from 'react-router-dom'

export default class Dashboard extends React.Component {
  render () {
    const { context } = this.props
    return (
      <div>
        <h1>User Dashboard</h1>
        <p>Welcome, {context.authUser.email}.</p>
        {(context.activePerson && context.activeCase) &&
          <p>
            You are currently working on case <strong>{context.activeCase.name}</strong> for <strong>{context.activePerson.name}</strong>.
          </p>
        }
        <p>Choose a case to work on or <Link to="/app/cases/create">create a new case</Link>.</p>
        <PeopleList user={context.authUser} />
      </div>
    )
  }
}
