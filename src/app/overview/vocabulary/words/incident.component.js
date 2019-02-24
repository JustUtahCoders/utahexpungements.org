import React from 'react'
import DefinedTerm from '../defined-term.component.js'

export default function IncidentDefn(props) {
  return (
    <>
      <div className="vertical-margin-8">
        An incident is a group of <DefinedTerm term="charge">charges</DefinedTerm> that shows up on
        the printout of your criminal history record. Most of the time, an incident corresponds to
        a <DefinedTerm term="court case" />. However, sometimes your criminal record
        will have incidents that do not correspond with a court case.
      </div>
      <div className="vertical-margin-8">
        For expungements, <DefinedTerm term="court cases">court cases</DefinedTerm> are what matters.
      </div>
    </>
  )
}
