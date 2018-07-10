import React from 'react'

const Steps = [
  {
    id: 1,
    yesHandler: 2, 
    noHandler: 4,
    content: 'Does your Crime hae a conviction?'
  },
  {
    id: 2,
    yesHandler: 101,
    noHandler: 3,
    content: 'Do You have a criminal case pending?'
  },
  {
    id: 3,
    yesHandler: 4,
    noHandler: 101,
    content: 'Have all fines, fees, restitution, and interest been paid?' 
  },
  {
    id: 4,
    yesHandler: 1,
    noHandler: 1,
    content: 'Still Working On this', 
  },
  {
    id: 101,
    yesHandler: 1,
    noHandler: 1,
    content: 'You Are Not Eligible For An Expungement'
  }
] 

export default class ScreeningTool extends React.Component {
  state = {
    step: Steps[0]
  }

  render () {
    console.log('this is this.state.step', this.state.step)
    return (

    <div>
      <p>{this.state.step.content}</p>
      <button
        className="primary"
        onClick={() => this.setState({
          currentStep: this.state.step.yesHandler,
          step: Steps.find((item) => item.id === this.state.step.yesHandler)
        })}
      >
        Yes
      </button>
      <button
        className="primary"
        onClick={() => this.setState({
          currentStep: this.state.step.noHandler,
          step: Steps.find(item => item.id === this.state.step.noHandler)
        })}
      >
        No
      </button>

    </div>
    )
  }
}

