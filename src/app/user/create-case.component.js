import React from 'react'
import {Scoped} from 'kremling'
import {isEmpty, get, partial} from 'lodash'
import {database} from '../../firebase'
import context from '../../context'
import {success} from 'src/styleguide.js'
import {Link} from 'react-router-dom'

export default class CreateCase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newPerson: false,
      error: "",
      success: "",
      isLoading: false,
      personId: "",
      firstName: "",
      lastName: "",
      caseNickname: "",
      people: []
    }
  }

  componentDidMount () {
    const uid = this.props.context.authUser.uid
    database.getPeople(uid).then(people => {
      this.setState({
        people,
        personId: get(people, ['0', 'id'])
      })
    })
  }

  handleInputChange = (key, e) => {
    this.setState({
      [key]: e.target.value
    })
  }

  handleNewPersonRadioChange = (newPerson, e) => {
    this.setState({
      newPerson
    })
  }

  handlePersonSelectChange = e => {
    this.setState({
      personId: e.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()

    this.setState({
      isLoading: true
    })

    const { newPerson, personId, firstName, lastName, caseNickname, people } = this.state
    const uid = this.props.context.authUser.uid

    if (newPerson) {
      // Create the person and associate it with the newly created case
      database.createPerson(uid, `${firstName} ${lastName}`, true, { firstName, lastName })
        .then(personRef => {
          personRef.get().then(personSnapshot => {
            const person = personSnapshot.data()
            this.createCase(uid, personRef.id, caseNickname)
              .then(partial(this.doneCreatingCase, person))
          })
        })
        .catch(this.catchError)
    } else {
      // Create the case
      const selectedPerson = people.find(person => person.id === personId)
      this.createCase(uid, selectedPerson.id, caseNickname)
        .then(partial(this.doneCreatingCase, selectedPerson))
    }
  }

  createCase = (uid, personId, caseNickname) => {
    return database.createCase(uid, personId, caseNickname, true)
      .catch(this.catchError)
  }

  catchError = error => {
    this.setState({
      error: error.message,
      isLoading: false,
    })
  }

  doneCreatingCase = (person, caseRef) => {
    this.setState(prevState => ({
      isLoading: false,
      success: `Successfully created new case "${prevState.caseNickname}".`,
      newPerson: false,
      error: "",
      firstName: "",
      lastName: "",
      caseNickname: "",
    }))
    caseRef.get().then(caseSnapshot => {
      const kase = caseSnapshot.data()
      context.setContext({
        activePerson: person,
        activeCase: kase
      })
    })
  }

  isInvalid = () => {
    const { newPerson, personId, firstName, lastName, caseNickname } = this.state
    return (
      (newPerson && (isEmpty(firstName) || isEmpty(lastName))) ||
      (!newPerson && isEmpty(personId)) ||
      isEmpty(caseNickname)
    )
  }

  render() {
    const { isLoading, error, success, newPerson, personId, firstName, lastName, caseNickname, people } = this.state
    const isInvalid = this.isInvalid()

    return (
      <Scoped css={css}>
        <div>
          <h1>Create a New Case</h1>
          <form className="create-case-form" onSubmit={this.onSubmit}>
            <fieldset>
              <legend>Is this case for an existing person or a new person?</legend>
              <div>
                <input
                  type="radio"
                  id="existing"
                  checked={!newPerson}
                  onChange={partial(this.handleNewPersonRadioChange, false)}
                />
                <label htmlFor="existing">Existing</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="new"
                  checked={newPerson}
                  onChange={partial(this.handleNewPersonRadioChange, true)}
                />
                <label htmlFor="new">New</label>
              </div>
            </fieldset>
            {newPerson ? (
              <div>
                <p>Create a new person for this case.</p>
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={partial(this.handleInputChange, 'firstName')}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={partial(this.handleInputChange, 'lastName')}
                  />
                </div>
              </div>
            ) : (
              <div>
                <p>Choose a person for this case.</p>
                <select value={personId} onChange={this.handlePersonSelectChange}>
                  {people.map(person =>
                    <option
                      key={person.id}
                      value={person.id}
                    >
                      {person.name}
                    </option>
                  )}
                </select>
              </div>
            )}
            <div>
              <p>Choose a nickname for this case. You will be able to enter more data about the case later.</p>
              <input
                type="text"
                style={{ width: "100%" }}
                placeholder="Case Nickname"
                value={caseNickname}
                onChange={partial(this.handleInputChange, "caseNickname")}
              />
            </div>
            <button className="primary" disabled={isInvalid || isLoading} type="submit">
              {isLoading ? "Loading..." : "Create New Case"}
            </button>
          </form>
          {error &&
            <div className="error-message">
              Error: {error}
            </div>
          }
          {success &&
            <div className="success-message">
              <p>
                {success}{' '}
                You are now working on this case.
              </p>
              <p>
                <Link to="/app/dashboard">View all of your cases</Link> or <Link to="/app/certificate-of-eligibility/adult-coe-form">start filling out the application for certificate of eligibility</Link> for this case.
              </p>
            </div>
          }
        </div>
      </Scoped>
    )
  }
}

const css = `
  & .create-case-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }

  & .create-case-form fieldset {
    margin-bottom: 12px;
  }

  & .create-case-form input {
    margin-bottom: 12px;
    margin-right: 8px;
  }

  & .create-case-form select {
    margin-bottom: 12px;
  }

  & .error-message {
    margin-bottom: 12px;
    color: red;
  }

  & .success-message {
    margin-bottom: 12px;
    color: ${success};
  }

  & .success-message a {
    color: ${success};
    font-weight: bold;
  }
`
