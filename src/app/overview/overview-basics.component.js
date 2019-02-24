import React from 'react'
import OverviewCard from './overview-card.component.js'
import {Link} from 'react-router-dom'
import ExpungementDefn from './vocabulary/words/expungement.component.js'

export default function OverviewBasics(props) {
  return (
    <OverviewCard
      title={__("expungement basics")}
      primaryText={__("continue")}
      primaryHref="vocabulary"
      secondaryText={__("skip intro")}
      secondaryHref="/app/tool"
    >
      <h4>
        {__("what is expg")}
      </h4>
      <ExpungementDefn />
      <h4>
        {__("why does it matter")}
      </h4>
      <p>
        {__("reason it matters")}
      </p>
      <h4>
        {__("do i qualify")}
      </h4>
      <p>
        {__("qualify descr")[0]}<a href="https://le.utah.gov/xcode/Title77/Chapter40/C77-40_1800010118000101.pdf" rel="noopener" target="_blank">Utah Expungements Act</a>{__("qualify descr")[1]}
        <Link to="/app/are-you-eligible">{__("qualify descr")[2]}</Link>{__("qualify descr")[3]}
      </p>
      <p>
        {__("if multiple convictions")}
      </p>
      <h4>
        {__("how long does it take")}
      </h4>
      <p>
        {__("how long answer")[0]}<a href="https://www.change.org/p/14017112" target="_blank" rel="noopener">{__("how long answer")[1]}</a>{__("how long answer")[2]}
      </p>
      <h4>
        {__("what is cost")}
      </h4>
      <p>
        {__("cost answer")[0]}<Link to="/app/are-you-eligible">{__("cost answer")[1]}</Link>{__("cost answer")[2]}
      </p>
      <p>
        {__("if cannot afford")}
      </p>
      <h4>
        {__("how does website help")}
      </h4>
      <p>
        {__("how website helps")}
      </p>
      <p>
        {__("not lawyers")[0]}<Link to="/about">{__("not lawyers")[1]}</Link>{__("not lawyers")[2]}<a href="https://utahexpungements.boards.net" target="_blank" rel="noopener">{__("not lawyers")[3]}</a>{__("not lawyers")[4]}
      </p>
    </OverviewCard>
  )
}
