import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const Steps = [
  {
    id: 1,
    yesHandler: 2, 
    noHandler: 4,
    content: () => <p>Does your Crime hae a conviction?</p>,
    url: ''
  },
  {
    id: 2,
    yesHandler: 101,
    noHandler: 3,
    content: () => <p>Do You have a criminal case pending?</p>,
    url: '/pending'
  },
  {
    id: 3,
    yesHandler: 4,
    noHandler: 101,
    content: () => <p>Have all fines, fees, restitution, and interest been paid?</p>,
    url: '/fines-paid'
  },
  {
    id: 4,
    yesHandler: 101,
    noHandler: 5,
    content: () => (
      <div><h1>Are Any Of the Convictions: </h1><ul><li>
            A capital felony, 1st degree
            felony, or violent felony</li><li>Automobile Homocide</li><li>Felony Driving Under The Influence</li><li>A registerable Sex Offense</li></ul></div>
    ),
    url: '/felony'
  },
  {
    id: 5,
    yesHandler: 1,
    noHandler: 1,
    content: () => <p>Still Working On this</p>, 
    url: '/still'
  },
  {
    id: 101,
    yesHandler: 1,
    noHandler: 1,
    content: () => <p>You Are Not Eligible For An Expungement</p>,
    url: '/not-eligible'
  }
] 

export default class ScreeningTool extends React.Component {
  state = {
    step: Steps[0]
  }

  render () {
    const yesUrl = this.props.match.url + Steps.find(item => item.id === this.state.step.yesHandler).url
    const noUrl = this.props.match.url + Steps.find(item => item.id === this.state.step.noHandler).url
    const ContentComponent = this.state.step.content

    console.log('this is this.props.matchurl', this.props.match.url + this.state.step.url)
    return (
          <Route
            path={this.props.match.url + this.state.step.url}
            exact
            render={props => (
              <div>
                <div style={{ borderBottom: 10 }}>
                  <ContentComponent />
                </div>
                <Link to={yesUrl}>
                  <button
                    className="primary"
                    onClick={() => this.setState({
                      currentStep: this.state.step.yesHandler,
                      step: Steps.find((item) => item.id === this.state.step.yesHandler)
                    })}
                  >
                  Yes
                </button>
              </Link>
              <Link to={noUrl}>
                <button
                  className="primary"
                  onClick={() => this.setState({
                    currentStep: this.state.step.noHandler,
                    step: Steps.find(item => item.id === this.state.step.noHandler)
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
}

