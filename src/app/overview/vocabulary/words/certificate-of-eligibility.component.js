import React from 'react'
import DefinedTerm from '../defined-term.component.js'
import {Link} from 'react-router-dom'

export default function CertificateOfEligibilityDefn(props) {
  return (
    <>
      <div className="vertical-margin-8">
        {__("def - coe")[0]}<Link to="/app/forms/adult-coe-form">{__("def - coe")[1]}</Link>{__("def - coe")[2]}<DefinedTerm term="bci" />
        {__("def - coe")[3]}<Link to="/app/tool/file-petition">{__("def - coe")[4]}</Link>{__("def - coe")[5]}
      </div>
      <div className="vertical-margin-8">
        {__("def - coe")[6]}<DefinedTerm term="court case" />{__("def - coe")[7]}
      </div>
      <div className="vertical-margin-8">
        {__("def - coe")[8]}<a target="_blank" rel="noopener" href="https://bci.utah.gov/expungements/">https://bci.utah.gov/expungements</a>.
      </div>
    </>
  )
}

