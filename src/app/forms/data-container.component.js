import React from 'react'
import { isEmpty, isEqual, get, set } from 'lodash'
import { database } from '../../firebase'

export default class DataContainer extends React.Component {
  state = {}

  componentDidMount() {
    this.loadContext(this.props.context)
  }

  componentDidUpdate(prevProps) {
    this.loadContext(this.props.context, prevProps.context)
  }

  loadContext = (newContext, prevContext = {}) => {
    if (!isEqual(newContext, prevContext)) {
      this.setState({
        person: get(newContext, 'activePerson.data'),
        case: get(newContext, 'activeCase.data'),
      })
    }
  }

  componentWillUnmount() {
    // Persist data
    const { context } = this.props
    if (context.authUser && context.activePerson && context.activeCase) {
      database.persistFormData(context.activePerson.id, context.activeCase.id, this.state)
    }
  }

  render() {
    return this.props.children({data: this.state, renderData: this.renderData, setData: this.setData})
  }

  setData = (key, value) => {
    this.setState(prevState => {
      return set(prevState, key, value)
    })
  }

  renderData = key => {
    return get(this.state, key, '')
  }
}
