import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const Steps = {
  step1: {
    id: 1,
    yesHandler: 2, 
    noHandler: 9,
    content: () => <p>Does your Crime hae a conviction?</p>,
    url: ''
  },
  step2: {
    id: 2,
    yesHandler: 6,
    noHandler: 3,
    content: () => <p>Do You have a criminal case pending?</p>,
    url: '/pending'
  },
  step3: {
    id: 3,
    yesHandler: 4,
    noHandler: 6,
    content: () => <p>Have all fines, fees, restitution, and interest been paid?</p>,
    url: '/fines-paid'
  },
  step4: {
    id: 4,
    yesHandler: 6,
    noHandler: 5,
    content: () => (
      <div><h1>Are Any Of the Convictions: </h1><ul><li>
            A capital felony, 1st degree
            felony, or violent felony</li><li>Automobile Homocide</li><li>Felony Driving Under The Influence</li><li>A registerable Sex Offense</li></ul></div>
    ),
    url: '/felony'
  },
  step5: {
    id: 5,
    yesHandler: 7,
    noHandler: 6,
    content: () => <div><h2>Have the following time periods passed since the date you were convicted or released from incarceration, prohibition or parole, whichever occurred <strong>last</strong>?</h2><ul><li>DUI/Impaired Driving - 10 years</li><li>Felony - 7 years</li><li>Class A Misdemeanor - 5 years</li><li>Class B Misdemeanor - 4 years</li><li>Other misdemeanor</li></ul></div>, 
    url: '/still'
  },
  step6: {
    id: 6,
    yesHandler: 1,
    noHandler: 1,
    content: () => <p>Based on the search performed, you may not be eligible for an expungement.</p>,
    url: '/not-eligible'
  },
  step7: {
    id: 7,
    yesHandler: 6,
    noHandler: 8,
    content: () => <div><p>Have you been convicted of two or more felonies in separate criminal episodes?</p><p>Have you been convicted, in separate criminal episodes, of three or more crimes of which two are class A misdemeanors</p><p>Have you been convicted, in separate criminal episodes, of four or more crimes wof which three are class B misdemeanors</p><p>Have you been convicted, in separate criminal episodes, of five or more crimes of any degree other than infractions?</p></div>,
    url: '/other-questions'
  },
  step8: {
    id: 8,
    yesHandler: 1,
    noHandler: 1,
    content: () => <p>It looks like you are likely eligible to expunge your record. Click here to fill out an application.</p>,
    url: '/eligible'
  },
  step9: {
    id: 9,
    yesHandler: 10,
    noHandler: 6,
    content: () => <p>Do you have a criminal case pending?</p>,
    url: '/criminal-pending'
  },
  step10: {
    id: 10,
    yesHandler: 11,
    noHandler: 6,
    content: () => <p>Have at least 30 days passed since the arrest?</p>,
    url: '/30-days'
  },
  step11: {
    id: 11,
    yesHandler: 8,
    noHandler: 6,
    content: () => <div><p>Have one of the following occurred</p><ul><li>No charges were filed;</li><li>Charges were filed, but the case was dismissed with prejudice;</li><li>Charges were filed, but the person was acquitted (found not guilty)</li><li>The statue of limitations has expired</li></ul></div>,
    url: '/one-of-following-occurred'
  },
}


export default class ScreeningTool extends React.Component {
  state = {
    step: Steps.step1 
  }

  route (step) {
    console.log('ZZZZ STEP', step)
    const ContentComponent = step.content
    const yesUrl = this.props.match.url + Steps['step' + step.yesHandler].url
    const noUrl = this.props.match.url + Steps['step' + step.noHandler].url

    return (
          <Route
            path={this.props.match.url + step.url}
            exact
            render={props => (
              <div>
                <div style={{ borderBottom: 10 }}>
                  <ContentComponent />
                </div>
                <Link to={yesUrl}>
                  <button
                    className="primary"
                    onClick={() => console.log('this is step + ', Steps['step' + step.yesHandler]) || this.setState({
                      step: Steps['step' + step.yesHandler]
                    })}
                  >
                  Yes
                </button>
              </Link>
              <Link to={noUrl}>
                <button
                  className="primary"
                  onClick={() => this.setState({
                    step: Steps['step' + step.noHandler]
                  })}
                >
                  No
                </button>
              </Link>

            </div>
            )}
      />

    )
  }

  render () {
    console.log('STEPS.step7', Steps.step7)
    console.log('this is this.state.step', this.state.step)
    return (
      <div>
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

