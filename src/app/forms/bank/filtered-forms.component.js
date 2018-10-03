import React from 'react'
import Fuse from 'fuse.js'

export default class FilteredForms extends React.Component {
  state = {
    unfilteredChildren: null,
    fuse: null
  }
  componentDidMount() {
    this.recreateFuseSearch()
  }
  render() {
    if (this.props.searchValue.length < 3) {
      return this.state.unfilteredChildren
    } else if (this.state.fuse) {
      return this.state.fuse.search(this.props.searchValue)
    } else {
      return null
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.showIncompleteForms !== prevProps.showIncompleteForms) {
      this.recreateFuseSearch()
    }
  }
  recreateFuseSearch() {
    const reactChildren = React
      .Children
      .toArray(this.props.children)
      .filter(child => this.props.showIncompleteForms ? true : child.props.readyForUsers)

    this.setState({
      unfilteredChildren: reactChildren,
      fuse: new Fuse(reactChildren, {
        caseSensitive: false,
        shouldSort: false,
        threshold: 0.2,
        tokenize: true,
        minMatchCharLength: 3,
        maxPatternLength: 50,
        keys: [
          'props.name',
          'props.keywords',
        ]
      }),
    })
  }
}
