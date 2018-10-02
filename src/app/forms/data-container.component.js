import React from 'react'
import { isEmpty, isEqual, get, set } from 'lodash'
import { database } from '../../firebase'

export const DataContainerContext = React.createContext()

export default class DataContainer extends React.Component {
  state = {
    person: {},
    case: {},
  }

  componentDidMount() {
    this.loadAuthData(this.props.authContext)
  }

  componentDidUpdate(prevProps) {
    this.loadAuthData(this.props.authContext, prevProps.authContext)
  }

  loadAuthData = (newAuthContext, prevAuthContext = {}) => {
    if (!isEqual(newAuthContext, prevAuthContext)) {
      this.setState({
        person: get(newAuthContext, 'activePerson.data', {}),
        case: get(newAuthContext, 'activeCase.data', {}),
      })
    }
  }

  render() {
    const dataContainerContext = {data: this.state, renderData: this.renderData, setData: this.setData}
    return (
      <DataContainerContext.Provider value={dataContainerContext}>
        {this.props.children}
      </DataContainerContext.Provider>
    )
  }

  setData = (key, value) => {
    this.setState(prevState => {
      return set(prevState, key, value)
    }, () => {
      const databaseUpdate = set({}, key, value)

      const { authContext } = this.props
      if (authContext.authUser && authContext.activePerson && authContext.activeCase) {
        database
          .persistFormData(authContext.activePerson.id, authContext.activeCase.id, databaseUpdate)
          .catch(err => {
            console.error(err)
          })
      }
    })
  }

  renderData = key => {
    return get(this.state, key, '')
  }
}
