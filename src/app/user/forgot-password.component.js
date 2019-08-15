import { auth } from "../../firebase";
import React from "react";
import { Scoped } from "kremling";
import { Link, withRouter } from "react-router-dom";
import { isEmpty, partial } from "lodash";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: null,
      emailSent: false
    };
  }

  handleInputChange = (key, e) => {
    this.setState({
      [key]: e.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const { email } = this.state;

    auth
      .doPasswordReset(email)
      .then(authUser => {
        this.setState({
          emailSent: true
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  };

  render() {
    const { email, emailSent, error } = this.state;
    const isInvalid = isEmpty(email);

    return (
      <Scoped css={css}>
        <div>
          <h1>Reset Password</h1>
          {emailSent ? (
            <div>
              <p>
                Your reset email was sent to {email}.{" "}
                <Link to="/app/login">Go back to the login page</Link>.
              </p>
            </div>
          ) : (
            <div>
              <form className="loginForm" onSubmit={this.onSubmit}>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={partial(this.handleInputChange, "email")}
                />
                <button className="primary" disabled={isInvalid} type="submit">
                  Reset Password
                </button>
              </form>
              {error && <div className="errorMessage">Error: {error}</div>}
              <div>
                Need an account? <Link to="/app/sign-up">Sign up</Link>
              </div>
              <div>
                Know your password? <Link to="/app/login">Login</Link>
              </div>
            </div>
          )}
        </div>
      </Scoped>
    );
  }
}

export default withRouter(ForgotPassword);

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
`;
