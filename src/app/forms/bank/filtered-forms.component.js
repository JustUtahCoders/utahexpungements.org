import React from 'react'
import Fuse from 'fuse.js'

export default class FilteredForms extends React.Component {
  state = {
    fuse: null
  }
  componentDidMount() {
    // Doing this only once in cDM makes it so that props.children can never change.
    // But I think that's okay for our case, and it's better for performance.
    const reactChildren = React.Children.toArray(this.props.children)
    this.setState({
      fuse: new Fuse(reactChildren, {
        caseSensitive: false,
        shouldSort: true,
        threshold: 0.7,
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
  render() {
    if (this.props.searchValue.length < 3) {
      return this.props.children
    } else if (this.state.fuse) {
      return this.state.fuse.search(this.props.searchValue)
    } else {
      return null
    }
  }
}
