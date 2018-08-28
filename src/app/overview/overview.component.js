import React from 'react'
import {Link} from 'react-router-dom'
import {Scoped} from 'kremling'

export default class Overview extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <div>
          <h3>
            What is an expungement?
          </h3>
          <p>
            An expungement is when the record of an arrest, investigation, detention, or conviction is removed. Once you complete the process, the record will be erased from your history in the eyes of the law.
          </p>
          <p>
            You can read more about expungements on the <a href="https://bci.utah.gov/expungements/" target="_blank">utah.gov website</a>. See <a href="https://www.utcourts.gov/howto/expunge/#petition" target="_blank">this page</a> for even more information.
          </p>
          <h3>
            Why expungements matter
          </h3>
          <p>
            Once you expunge a record, you are not required to disclose any information about it if an employer, landlord, or educational institution asks about your history. Expunged records will not appear in background checks, making it easier for you to access jobs, housing, and schooling. 
          </p>
          <h3>
            Am I eligible?
          </h3>
          <p>
            <a href="https://le.utah.gov/xcode/Title77/Chapter40/C77-40_1800010118000101.pdf" target="_blank">Utah state law</a> describes who qualifies for an expungement.
            The biggest factor is how much time has passed since the conviction or arrest. Other factors include if you have too many separate convictions or if there are pending charges, fees, or fines.
          </p>
          <p>
            To help you know if you qualify, Utah courts have provided a <a href="https://www.utcourts.gov/howto/expunge/docs/Expungement_Eligiblity_Flowchart.pdf" target="_blank">flow chart</a>.
          </p>
          <p>
            Additionally, you can check if you are eligible for an expungement with our <Link to="are-you-eligible">screening tool</Link>.
          </p>
          <h3>
            How do I get started?
          </h3>
          <p>
            You can expunge your criminal record with or without a lawyer. The process costs around $250-$500 per conviction and usually takes six months or more. You may be able to have some or all of the fees waived, depending on your financial situation.
          </p>
          <p>
            We have broken the process down into six steps. Click on each of these steps for more information.
          </p>
          <ol>
            <li>
              <Link to="/app/are-you-eligible">
                Determine which convictions are eligible for expungement
              </Link>
            </li>
            <li>
              <Link to="/app/certificate-of-eligibility">
                Apply for a certificate of eligibility
              </Link>
            </li>
            <li>
              <Link to="/app/file-petition">
                File an expungement petition to the court
              </Link>
            </li>
            <li>
              <Link to="/app/serve-petition">
                Notify public prosecutors about your expungement petition
              </Link>
            </li>
            <li>
              <Link to="/app/expungement-order">
                Attend a court hearing and obtain an expungement order
              </Link>
            </li>
            <li>
              <Link to="/app/deliver-to-agencies">
                Deliver a physical copy of the expungement order to government agencies
              </Link>
            </li>
          </ol>
          <div className="call-to-action">
            <Link to="/app/are-you-eligible">
              <button className="primary">
                Check your eligibility
              </button>
            </Link>
          </div>
        </div>
      </Scoped>
    )
  }
}

const css = `
  & .call-to-action {
    margin-top: 32rem;
    display: flex;
    justify-content: center;
  }
`
