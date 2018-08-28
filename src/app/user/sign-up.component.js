import {auth} from '../../firebase'
import React from 'react'
import {Scoped} from 'kremling'
import {Link, withRouter} from 'react-router-dom'
import {isEmpty, partial} from 'lodash'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
    }
  }

  handleInputChange = (key, e) => {
    this.setState({
      [key]: e.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()

    const {
      email,
      passwordOne,
    } = this.state

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        window.location = '/app/dashboard'
      })
      .catch(error => {
        this.setState({
          error: error.message
        })
      })
  }

  render () {
    const { email, error, passwordOne, passwordTwo } = this.state
    const isInvalid = passwordOne !== passwordTwo ||
      isEmpty(email) ||
      isEmpty(passwordOne)

    return (
      <Scoped css={css}>
        <div>
          <h1>Sign Up</h1>
          <form className="signupForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={partial(this.handleInputChange, 'email')}
            />
            <input
              type="password"
              placeholder="Password"
              value={passwordOne}
              onChange={partial(this.handleInputChange, 'passwordOne')}
            />
            <input
              type="password"
              placeholder="Confirm password"
              value={passwordTwo}
              onChange={partial(this.handleInputChange, 'passwordTwo')}
            />
            <button className="primary" disabled={isInvalid} type="submit">
              Sign up
            </button>
          </form>
          {error &&
            <div className="errorMessage">
              Error: {error}
            </div>
          }
          Already have an account?{' '}
          <Link to="/app/login">
            Login
          </Link>
        </div>
      </Scoped>
    )
  }
}

export default withRouter(SignUp)

const css = `
  & .signupForm {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }

  & .signupForm input {
    margin-bottom: 12px;
  }

  & .errorMessage {
    margin-bottom: 12px;
    color: red;
  }
`
