import React from 'react'
import {Scoped} from 'kremling'
import {Route, Redirect} from 'react-router-dom'
import Overview from './overview/overview.component.js'
import ScreeningTool from './screening-tool/screening-tool.component.js'
import CertificateOfEligibility from './certificate-of-eligibility/certificate-of-eligibility.component.js'
import FilePetition from './file-petition/file-petition.component.js'
import ServePetition from './serve-petition/serve-petition.component.js'
import Login from './user/login.component.js'
import SignUp from './user/sign-up.component.js'
import ForgotPassword from './user/forgot-password.component.js'
import Dashboard from './user/dashboard.component.js'
import CreateCase from './user/create-case.component.js'
import Footer from 'src/footer/footer.component.js'
import Banner from './banner.component.js'
import Breadcrumbs from './breadcrumbs.component.js'
import {mediaDesktop, mediaMobile, darkGray, lightGray} from 'src/styleguide.js'
import FormBank from './forms/bank/form-bank.component.js'
import DataContainer from './forms/data-container.component.js'
import AppContext from 'src/app-context.component.js'

export default class App extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <div>
          <Breadcrumbs {...this.props} />
          <div style={{ minHeight: '100vh' }}>
            <div style={{ padding: '20px', paddingBottom: '211px' }}>
              <div className="app breadcrumb-margin-top content-container" >
                <Banner {...this.props} />
                <div className="card main-content" >
                  <AppContext.Consumer>
                    {authContext =>
                      <DataContainer authContext={authContext}>
                        <Route
                          path={this.props.match.url}
                          exact
                          render={() => <Redirect to={this.props.match.url + '/expungements-overview'} />}
                        />
                        <Route
                          path={this.props.match.url + '/expungements-overview'}
                          component={Overview}
                        />
                        <Route
                          path={this.props.match.url + '/are-you-eligible'}
                          component={ScreeningTool}
                        />
                        <Route
                          path={this.props.match.url + '/certificate-of-eligibility'}
                          component={CertificateOfEligibility}
                        />
                        <Route
                          path={this.props.match.url + '/file-petition'}
                          component={FilePetition}
                        />
                        <Route
                          path={this.props.match.url + '/serve-petition'}
                          component={ServePetition}
                        />
                        <Route
                          path={this.props.match.url + '/forms'}
                          component={FormBank}
                        />
                        <Route
                          path={this.props.match.url + '/sign-up'}
                          component={SignUp}
                        />
                        <Route
                          path={this.props.match.url + '/forgot-password'}
                          component={ForgotPassword}
                        />
                        <Route
                          path={this.props.match.url + '/login'}
                          component={Login}
                        />
                        {authContext.authUser &&
                          <Route
                            path={this.props.match.url + '/dashboard'}
                            render={props => <Dashboard {...props} context={authContext} />}
                          />
                        }
                        {authContext.authUser &&
                          <Route
                            path={this.props.match.url + '/cases/create'}
                            render={props => <CreateCase {...props} context={authContext} />}
                          />
                        }
                      </DataContainer>
                    }
                  </AppContext.Consumer>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: '211px', marginTop: '-211px' }}>
            <Footer />
          </div>
        </div>
      </Scoped>
    )
  }
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
      width: 75%;
      max-width: 1400px;
    }
  }

  ${mediaMobile} {
    & .app {
      width: 95%;
    }
  }

  & .content-container {
    width: 75vw;
    max-width: 936rem;
  }

  & .main-content {
    width: 100%;
    margin: 16rem 0;
    padding: 32rem;
    border: 1rem solid ${darkGray};
  }
`
