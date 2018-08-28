import React from 'react'
import {Link} from 'react-router-dom'

export default class FilePetitionOverview extends React.Component {
  render() {
    return (
      <>
        <h1>
          File Petition Overview
        </h1>
        <Link to={this.props.match.url + '/petition-for-conviction'}>
          Fill out a petition for a conviction
        </Link>
      </>
    )
  }
}
