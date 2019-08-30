import { auth, database } from "../../firebase";
import React from "react";
import { Scoped } from "kremling";
import { Link, withRouter } from "react-router-dom";
import { isEmpty, partial } from "lodash";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passwordOne: "",
      passwordTwo: "",
      firstName: "",
      lastName: "",
      error: null
    };
  }

  handleInputChange = (key, e) => {
    this.setState({
      [key]: e.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.setState({
      isLoading: true
    });

    const { email, passwordOne, firstName, lastName } = this.state;

    // Create auth user
    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        const uid = authUser.user.uid;
        // Create initial person data and case
        database
          .createPerson(uid, `${firstName} ${lastName}`, true, {
            firstName,
            lastName
          })
          .then(person => {
            database
              .createCase(uid, person.id, `${firstName}'s expungement`, true)
              .then(kase => {
                window.location = "/app/dashboard";
              });
          });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          isLoading: false
        });
      });
  };

  render() {
    const {
      email,
      error,
      isLoading,
      passwordOne,
      passwordTwo,
      firstName,
      lastName
    } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      [email, passwordOne, firstName, lastName].some(isEmpty);

    return (
      <Scoped css={css}>
        <div>
          <h1>Sign Up</h1>
          <p>
            With an account, your personal and case data will be saved and
            automatically populated across different forms. You can even manage
            multiple cases for multiple people.
          </p>
          <form className="signupForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={partial(this.handleInputChange, "firstName")}
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={partial(this.handleInputChange, "lastName")}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={partial(this.handleInputChange, "email")}
            />
            <input
              type="password"
              placeholder="Password"
              value={passwordOne}
              onChange={partial(this.handleInputChange, "passwordOne")}
            />
            <input
              type="password"
              placeholder="Confirm password"
              value={passwordTwo}
              onChange={partial(this.handleInputChange, "passwordTwo")}
            />
            <button
              className="primary"
              disabled={isInvalid || isLoading}
              type="submit"
            >
              {isLoading ? "Loading..." : "Sign up"}
            </button>
          </form>
          {error && <div className="errorMessage">Error: {error}</div>}
          Already have an account? <Link to="/app/login">Login</Link>
        </div>
      </Scoped>
    );
  }
}

export default withRouter(SignUp);

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
`;
