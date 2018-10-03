import React from 'react'
import { database } from '../../firebase'
import {groupBy, partial} from 'lodash'
import context from '../../context'

export default class PeopleList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      people: []
    }
  }

  componentDidMount () {
    database.getPeople(this.props.user.uid).then(people => {
      this.setState({ people })
    })
    database.getCases(this.props.user.uid).then(cases => {
      this.setState({ cases })
    })
  }

  chooseCase = (person, kase) => {
    context.setContext({
      activePerson: person,
      activeCase: kase,
    })
  }

  render () {
    const { cases, people } = this.state
    const groupedCases = groupBy(cases, 'personid')
    return (
      <div>
        {people.map(person => {
          const personCases = groupedCases[person.id]
          return (
            <div key={person.id}>
              {person.name}
              <ul>
                {personCases && personCases.map(kase =>
                  <li key={kase.id}>
                    <a href="" onClick={partial(this.chooseCase, person, kase)}>
                      {kase.name}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}
