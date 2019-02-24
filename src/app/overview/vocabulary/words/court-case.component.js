import React from 'react'
import DefinedTerm from '../defined-term.component.js'

export default function CourtCaseDefn(props) {
  return (
    <>
      <div className="vertical-margin-8">
        {__("def - court case")[0]}<DefinedTerm term="court case">{__("def - court case")[1]}</DefinedTerm>{__("def - court case")[2]}
      </div>
      <div className="vertical-margin-8">
        {__("def - court case")[3]}
      </div>
    </>
  )
}

