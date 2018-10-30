import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const Steps = {
  step0: {
    id: 0,
    yesHandler: 1,
    noHandler: 1,
    content: () => <div><h1>Eligibility Tool</h1><p>This tool is to give you an idea of whether or not you are eligible for an expungement. Please remember that this is not legal advice &mdash; only a judge can tell you whether or not you are eligible. However, this tool will give you a good initial idea of whether or not you are eligible. Happy expunging!</p></div>,
    url: ''
  },
  step1: {
    id: 1,
    yesHandler: 2,
    noHandler: 9,
    content: () => <div><h2>Does your crime have a conviction?</h2><p>This means that you either went to trial or pleaded guilty. Don't worry &mdash; everyone makes mistakes.</p></div>,
    url: '/conviction'
  },
  step2: {
    id: 2,
    yesHandler: 6,
    noHandler: 3,
    content: () => <h2>Do you have a criminal case pending?</h2>,
    url: '/pending'
  },
  step3: {
    id: 3,
    yesHandler: 4,
    noHandler: 6,
    content: () => <h2>Have all fines, fees, restitution, and interest been paid?</h2>,
    url: '/fines-paid'
  },
  step4: {
    id: 4,
    yesHandler: 6,
    noHandler: 5,
    content: () => (
      <div>
        <h2>Are any of your convictions:</h2>
        <ul style={{ listStyle: 'initial', marginLeft: '18px' }}>
          <li>A capital felony, 1st degree felony, or violent felony</li>
          <li>Automobile homocide</li>
          <li>Felony driving under the influence (D.U.I.)</li>
          <li>A registerable sex offense</li>
        </ul>
      </div>
    ),
    url: '/felony'
  },
  step5: {
    id: 5,
    yesHandler: 7,
    noHandler: 6,
    content: () => <div><h2>Have the following time periods passed since the date you were convicted or released from incarceration, prohibition or parole, whichever occurred <strong>last</strong>?</h2><ul style={{ listStyle: 'circle' }}><li style={{ marginBottom: 5, display: 'flex', justifyContent: 'space-between', width: 300 }}><div>DUI/Impaired Driving</div><div> - 10 years</div></li><li style={{ marginBottom: 5, display: 'flex', justifyContent: 'space-between', width: 300 }}><div>Felony</div><div> - 7 years</div></li><li style={{ marginBottom: 5, display: 'flex', justifyContent: 'space-between', width: 300 }}><div>Class A Misdemeanor</div><div> - 5 years</div></li><li style={{ marginBottom: 5, display: 'flex', justifyContent: 'space-between', width: 300 }}><div>Class B Misdemeanor</div><div> - 4 years</div></li><li style={{ marginBottom: 5, display: 'flex', justifyContent: 'space-between', width: 300 }}>Other misdemeanor</li></ul></div>, 
    url: '/still'
  },
  step6: {
    id: 6,
    yesHandler: 0,
    noHandler: 0,
    content: () => <div><h2>Based on the data you submitted, you may not be eligible for an expungement.</h2><p>But remember, this isn't official legal advice. So don't get too down in the dumps. </p></div>,
    url: '/not-eligible'
  },
  step7: {
    id: 7,
    yesHandler: 6,
    noHandler: 8,
    content: () => <div><h2>Have you been convicted of two or more felonies in separate criminal episodes?</h2><p>Have you been convicted, in separate criminal episodes, of three or more crimes of which two are class A misdemeanors?</p><p>Have you been convicted, in separate criminal episodes, of four or more crimes wof which three are class B misdemeanors?</p><p>Have you been convicted, in separate criminal episodes, of five or more crimes of any degree other than infractions?</p></div>,
    url: '/other-questions'
  },
  step8: {
    id: 8,
    yesHandler: 0,
    noHandler: 0,
      content: () => <h2>It looks like you are likely eligible to expunge your record. Awesome! <a href="/app/certificate-of-eligibility">Click here</a> to fill out an application.</h2>,
    url: '/eligible'
  },
  step9: {
    id: 9,
    yesHandler: 10,
    noHandler: 6,
    content: () => <h2>Do you have a criminal case pending?</h2>,
    url: '/criminal-pending'
  },
  step10: {
    id: 10,
    yesHandler: 11,
    noHandler: 6,
    content: () => <h2>Have at least 30 days passed since the arrest?</h2>,
    url: '/30-days'
  },
  step11: {
    id: 11,
    yesHandler: 8,
    noHandler: 6,
    content: () => <div><h2>Have one of the following occurred</h2><ul style={{ listStyle: 'circle' }}><li>No charges were filed;</li><li>Charges were filed, but the case was dismissed with prejudice;</li><li>Charges were filed, but the person was acquitted (found not guilty)</li><li>The statue of limitations has expired</li></ul></div>,
    url: '/one-of-following-occurred'
  },
}


export default class ScreeningTool extends React.Component {
  state = {
    step: Steps.step0 
  }

  route (step) {
    const ContentComponent = step.content
    console.log('this is contentComponent', ContentComponent)
    const yesUrl = this.props.match.url + Steps['step' + step.yesHandler].url
    const noUrl = this.props.match.url + Steps['step' + step.noHandler].url
    console.log('this is this.props.match.url', this.props.match.url + step.url)

    return (
      <Route
        path={this.props.match.url + step.url}
        exact
        render={props => (
          <div>
            <div style={{ borderBottom: 10 }}>
              <ContentComponent />
            </div>
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
              <Link to={yesUrl}>
                {step.url !== '/not-eligible' && step.url !== '/eligible' && step.id !== 0 ? (
                  <button
                    className="primary"
                    onClick={() => this.setState({
                      step: Steps['step' + step.yesHandler]
                    })}
                    style={{ marginRight: 20, paddingLeft: 40, paddingRight: 40 }}
                  >
                    Yes
                  </button>

                ) : null}
              </Link>
              <Link to={noUrl}>
                {step.url !== '/not-eligible' && step.url !== '/eligible' && step.id !== 0 ? (
                  <button
                    className="primary"
                    onClick={() => this.setState({
                      step: Steps['step' + step.noHandler]
                    })}
                    style={{ paddingLeft: 40, paddingRight: 40 }}
                  >
                    No
                  </button>
                ) : null}
                </Link>


                <Link to={noUrl}>
                  {step.id === 0 ? (
                    <button
                      className="primary"
                      onClick={() => this.setState({
                        step: Steps['step' + step.noHandler]
                      })}
                      style={{ marginRight: 20, paddingLeft: 40, paddingRight: 40 }}
                    >
                      Get Started
                    </button>
                  ) : null}
                </Link>

                {step.id === 6 && (
                  <div>
                    <Link to="/app/expungements-overview">
                      <button
                        className="primary"
                        style={{ marginRight: 20, paddingLeft: 40, paddingRight: 40 }}
                      >
                        Back to Expungement Overview
                      </button>
                    </Link>
                    <Link to={noUrl}>
                      <button
                        className="secondary"
                        onClick={() => this.setState({
                          step: Steps['step' + step.noHandler]
                        })}
                        style={{ marginRight: 20, paddingLeft: 40, paddingRight: 40 }}
                      >
                        Start Again
                      </button>
                    </Link>
                  </div>
                )}

              </div>

            </div>
            )}
      />

    )
  }

  render () {
    return (
      <div>
        {this.route(Steps.step0)}
        {this.route(Steps.step1)}
        {this.route(Steps.step2)}
        {this.route(Steps.step3)}
        {this.route(Steps.step4)}
        {this.route(Steps.step5)}
        {this.route(Steps.step6)}
        {this.route(Steps.step7)}
        {this.route(Steps.step8)}
        {this.route(Steps.step9)}
        {this.route(Steps.step10)}
        {this.route(Steps.step11)}
      </div>
    )
  }
}

