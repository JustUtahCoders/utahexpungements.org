import React from 'react'
import { Link } from 'react-router-dom'

export default class PetitionNavigator extends React.Component {
  render(){
    const row = {
      marginBottom: 24
    }

    return(
      <>
        <section> 
          <p>Let's determine what kind of petition to file</p>
        </section>
        <section>
          <h4>Which of the following best describes you?</h4>
          <div style={row}>
            <p>
              <Link
                to={'/app/file-petition/petition-for-conviction'}
              >
                I am seeking to expunge records of a conviction.
              </Link>
            </p>
          </div>
          <div style={row}>
            <p>
              <Link
                to='dismissal-acquittal-petition'
                >
                A court case was filed against me, but the case was dismissed
                without a conviction.
              </Link>
            </p>
          </div>
          <div style={row}>
            <p>
              <Link 
                to='dismissal-acquittal-petition'
              >
              A court case was filed against me, but I was acquitted of the charges.
              </Link>
            </p>
          </div>
          <div style={row}>
            <p>
              <Link
                to='charges-never-filed-petition'
              >
                I was arrested but charges were never filed
              </Link>
            </p>
          </div>
          <div style={row}>
            <p>
              <Link
                to='special-certificate'
              >
                The BCI issued a <strong>Special Certificate</strong> instead of a Certificate of Eligibility. The BCI was unable to determine my eligibility for expungement.
              </Link>
            </p>
          </div>
          <div style={row}>
          <p>
            <Link
              to='drug-possession-petition'
            >
              I am seeking to expunge records from a drug possession offense.
            </Link>
          </p>
          <p>
            <em>
              Carefully review this petition to be sure that this applies to your situation
            </em>
          </p>

          </div>

        </section>
      </>
    )
  }
}
