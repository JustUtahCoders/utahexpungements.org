import React from "react";
import { Scoped, a, m } from "kremling";
import { Route } from "react-router-dom";
import { info, mediaDesktop } from "frontend/styleguide.js";
import { Link } from "react-router-dom";

export default class Banner extends React.Component {
  render() {
    const { authContext } = this.props;

    const formPaths = [
      "/forms",
      "/certificate-of-eligibility/adult-coe-form",
      "/file-petition"
    ];

    return (
      <Scoped css={css}>
        <div className="banner-container">
          <Route
            path={this.props.match.url + "/are-you-eligible"}
            render={() => (
              <div className="banner default card">
                <strong>Pro Tip</strong>: You can get an official copy of your
                criminal history at{" "}
                <a href="https://bci.utah.gov">Utah's BCI office</a>, located at
                3888 W 5400 S, Taylorsville, UT 84129. The office is open Monday
                &mdash; Friday, 8am to 5pm. It costs $15 and should only take
                about 15-20 minutes.
              </div>
            )}
          />
          {!authContext.authUser && (
            <Route
              path={this.props.match.url + `:subpath(${formPaths.join("|")})`}
              render={() => (
                <div className="banner default card">
                  <strong>Pro Tip</strong>: <Link to="/app/login">Log in</Link>{" "}
                  or <Link to="/app/sign-up">create an account</Link> to make
                  sure you'll only enter this data once. Your form data will
                  automatically save and populate to future forms throughout the
                  process.
                </div>
              )}
            />
          )}
        </div>
      </Scoped>
    );
  }
}

const css = `
  & .banner-container {
    width: 100%;
  }

  ${mediaDesktop} {
    & .banner-container {
      margin-top: 20rem;
    }
  }

  & .banner {
    padding: 12px;
  }

  & .default {
    background-color: ${info};
  }
`;
