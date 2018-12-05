import React from 'react'
import {Link} from 'react-router-dom'
import OverviewCard from './overview-card.component.js'

export default function Landing(props) {
  return (
    <OverviewCard
      title={__("overview landing")}
      primaryText={__("get started")}
      primaryHref={"/app/expungements-overview/what-is-an-expungement"}
      secondaryText={__("skip intro")}
      secondaryHref="/app/expungements-overview/start-an-expungement"
    >
      <p>
        {__("overview landing 1")}
      </p>
      <h2>
        {__("overview landing 2")}
      </h2>
      <p>
        {__("overview landing 3")} <Link to="/about"> {__("ftu descr")[1]}</Link> {__("overview landing 4")}
      </p>
      <p>
        {__("overview landing 5")}
      </p>
      <p>
        {__("overview landing 6")[0]} <Link to="/contribute">{__("overview landing 6")[1]}</Link>
        {__("overview landing 6")[2]} <a href="mailto:utahexpungementsorg@gmail.com">{__("overview landing 6")[3]}</a> (utahexpungementsorg@gmail.com)
        {__("overview landing 6")[4]}<a target="_blank" rel="noopener" href="https://utahexpungements.freeflarum.org">{__("overview landing 6")[5]}</a>
      </p>
    </OverviewCard>
  )
}
