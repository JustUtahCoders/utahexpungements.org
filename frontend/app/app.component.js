import React from "react";
import { Scoped } from "kremling";
import { Route, Redirect } from "react-router-dom";
import Overview from "./overview/overview.component.js";
import Login from "./user/login.component.js";
import SignUp from "./user/sign-up.component.js";
import ForgotPassword from "./user/forgot-password.component.js";
import Dashboard from "./user/dashboard.component.js";
import CreateCase from "./user/create-case.component.js";
import Person from "./user/person.component.js";
import Footer from "frontend/footer/footer.component.js";
import Banner from "./banner.component.js";
import Breadcrumbs from "./breadcrumbs.component.js";
import {
  mediaDesktop,
  mediaMobile,
  darkGray,
  lightGray
} from "frontend/styleguide.js";
import FormBank from "./forms/bank/form-bank.component.js";
import DataContainer from "./forms/data-container.component.js";
import AppContext from "frontend/app-context.component.js";
import ExpungementsTool from "./expungements-tool/expungements-tool.component.js";
import DocketPdf from "./docket-pdf/docket-pdf.component";

export default function App(props) {
  return (
    <Scoped css={css}>
      <div>
        <Breadcrumbs {...props} />
        <div>
          <AppContext.Consumer>
            {authContext => (
              <div className="padded-container">
                <div className="app breadcrumb-margin-top content-container">
                  <Banner {...props} authContext={authContext} />
                  <div className="card main-content">
                    <DataContainer authContext={authContext}>
                      <Route
                        path={props.match.url}
                        exact
                        render={() => (
                          <Redirect to={props.match.url + "/overview"} />
                        )}
                      />
                      <Route
                        path={props.match.url + "/overview"}
                        component={Overview}
                      />
                      <Route
                        path={props.match.url + "/tool"}
                        component={ExpungementsTool}
                      />
                      <Route
                        path={props.match.url + "/forms"}
                        component={FormBank}
                      />
                      <Route
                        path={props.match.url + "/sign-up"}
                        component={SignUp}
                      />
                      <Route
                        path={props.match.url + "/forgot-password"}
                        component={ForgotPassword}
                      />
                      <Route
                        path={props.match.url + "/login"}
                        component={Login}
                      />
                      {authContext.authUser && (
                        <Route
                          path={props.match.url + "/dashboard"}
                          render={props => (
                            <Dashboard {...props} context={authContext} />
                          )}
                        />
                      )}
                      {authContext.authUser && (
                        <Route
                          path={props.match.url + "/cases/create"}
                          render={props => (
                            <CreateCase {...props} context={authContext} />
                          )}
                        />
                      )}
                      {authContext.authUser && (
                        <Route
                          path={props.match.url + "/people/:id"}
                          render={props => (
                            <Person {...props} context={authContext} />
                          )}
                        />
                      )}
                      <Route
                        path={props.match.url + "/docket-pdf"}
                        component={DocketPdf}
                      />
                    </DataContainer>
                  </div>
                </div>
              </div>
            )}
          </AppContext.Consumer>
        </div>
      </div>
    </Scoped>
  );
}

export const css = `
  & .app {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${mediaDesktop} {
    & .app {
      max-width: 1400px;
    }

    & .padded-container {
      padding: 0rem 50rem;
    }

    & .main-content {
      margin: 20rem 0;
      border: 1rem solid ${darkGray};
      padding: 32rem 24rem;
    }
  }

  ${mediaMobile} {
    & .padded-container {
      padding: 0 0;
    }

    & .main-content {
      margin-top: 0;
      border: none;
      padding: 16rem 24rem;
    }
  }

  & .content-container {
    width: 100%;
    max-width: 936rem;
  }

  & .main-content {
    width: 100%;
  }
`;
