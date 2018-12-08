import React from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import {Scoped} from 'kremling'
import OverviewCard from './overview-card.component.js'
import Landing from './landing.component.js'
import OverviewBasics from './overview-basics.component.js'
import Vocabulary from './vocabulary/vocabulary.component.js'

export default function Overview(props) {
  return (
    <div>
      <Route path={`${props.match.url}`} exact render={routeProps => (
        <Redirect to={`${routeProps.match.url}/landing`} />
      )} />
      <Route path={`${props.match.url}/landing`} component={Landing} />
      <Route path={`${props.match.url}/basics`} component={OverviewBasics} />
      <Route path={props.match.url + "/vocabulary"} component={Vocabulary} />
    </div>
  )
}
