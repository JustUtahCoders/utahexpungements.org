import React from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import {Scoped} from 'kremling'
import OverviewCard from './overview-card.component.js'
import Landing from './landing.component.js'

export default function Overview(props) {
  return (
    <Scoped css={css}>
      <div>
        <Route path={`${props.match.url}`} exact render={routeProps => (
          <Redirect to={`${routeProps.match.url}/landing`} />
        )} />
        <Route path={`${props.match.url}/landing`} component={Landing} />
        <Route path={`${props.match.url}/what-is-an-expungement`} render={routeProps => (
          <OverviewCard title={__("what is expg")}>
            <p>
              An expungement is when the record of an arrest, investigation, detention, or conviction is removed. Once you complete the process, the record will be erased from your history in the eyes of the law.
            </p>
            <p>
              You can read more about expungements on the <a href="https://bci.utah.gov/expungements/" target="_blank">utah.gov website</a>. See <a href="https://www.utcourts.gov/howto/expunge/#petition" target="_blank">page</a> for even more information.
          </p>
          </OverviewCard>
        )} />
      </div>
    </Scoped>
  )
}

const css = `
`
