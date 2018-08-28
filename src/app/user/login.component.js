import {auth} from '../../firebase'
import React from 'react'
import {Scoped} from 'kremling'
import {Link, withRouter} from 'react-router-dom'
import {isEmpty, partial} from 'lodash'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
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
      password,
    } = this.state

    auth.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.props.history.push('/app/dashboard')
      })
      .catch(error => {
        this.setState({
          error: error.message
        })
      })
  }

  render () {
    const { email, error, password } = this.state
    const isInvalid = isEmpty(email) || isEmpty(password)

    return (
      <Scoped css={css}>
        <div>
          <h1>Login</h1>
          <form className="loginForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={partial(this.handleInputChange, 'email')}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={partial(this.handleInputChange, 'password')}
            />
            <button className="primary" disabled={isInvalid} type="submit">
              Login
            </button>
          </form>
          {error &&
            <div className="errorMessage">
              Error: {error}
            </div>
          }
          Need an account?{' '}
          <Link to="/app/sign-up">
            Sign up
          </Link>
        </div>
      </Scoped>
    )
  }
}

export default withRouter(Login)

const css = `
  & .loginForm {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }

  & .loginForm input {
    margin-bottom: 12px;
  }

  & .errorMessage {
    margin-bottom: 12px;
    color: red;
  }
`
