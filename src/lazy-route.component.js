import React from "react";
import { Route } from "react-router";

export default class LazyRoute extends React.Component {
  state = {
    loadedComponent: null
  };
  componentDidMount() {
    this.props
      .loadRoute()
      .then(mod => this.setState({ loadedComponent: mod.default }))
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    const Comp = this.state.loadedComponent || Noop;
    return <Route {...this.props} component={Comp} />;
  }
}

function Noop() {
  return null;
}
