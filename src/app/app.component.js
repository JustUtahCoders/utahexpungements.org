import React from 'react'
import {Scoped} from 'kremling'
import {Route, Redirect} from 'react-router-dom'
import Overview from './overview/overview.component.js'
import ScreeningTool from './screening-tool/screening-tool.component.js'
import CertificateOfEligibility from './certificate-of-eligibility/certificate-of-eligibility.component.js'
import FilePetition from './file-petition/file-petition.component.js'
import ServePetition from './serve-petition/serve-petition.component.js'
import Footer from 'src/footer/footer.component.js'
import Breadcrumbs from './breadcrumbs.component.js'

export default class App extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <Breadcrumbs {...this.props} />
        <div className="app breadcrumb-margin-top">
          <div className="card main-content">
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
          </div>
        </div>
        <Footer />
      </Scoped>
    )
  }
}

export const css = `
  & .app {
    margin-left: auto;
    margin-right: auto;
    width: 65%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  & .main-content {
    width: 75vw;
    max-width: 936rem;
    margin: 48rem 0;
    padding: 32rem;
  }
`
