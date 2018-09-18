import AppContext from './app-context.component.js'
import {database, firebase} from './firebase'
import React from 'react'
import context from './context'

const withAuthentication = (Component) =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        authUser: null,
        context: {}
      }
    }

    componentDidMount() {
      context.onContextChanged(context => {
        this.setState({ context })
      })
      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          database.getDefaultContext(authUser.uid).then(defaultContext => {
            context.setContext(defaultContext)
          })
          this.setState({ authUser })
        } else {
          this.setState({ authUser: null });
        }
      })
    }

    componentWillUnmount() {
      context.removeOnContextChanged()
    }

    render() {
      const { authUser, context } = this.state
      return (
        <AppContext.Provider value={{authUser, ...context}}>
          <Component {...this.props} />
        </AppContext.Provider>
      )
    }
  }

export default withAuthentication
