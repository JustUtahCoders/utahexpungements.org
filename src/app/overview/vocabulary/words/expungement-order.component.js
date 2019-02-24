import React from 'react'
import {Link} from 'react-router-dom'
import DefinedTerm from '../defined-term.component.js'

export default function ExpungementOrder(props) {
  return (
    <div className="vertical-margin-8">
      An expungement order is a document signed by a judge that orders government agencies
      to seal all record of a <DefinedTerm term="court case" />. This
      happens near the end of the expungement process and means that your expungement is
      valid. However, there are still more steps after obtaining an expungement order, so check
      out <Link to="/app/tool">our expungement tool</Link> for what to do next.
    </div>
  )
}
