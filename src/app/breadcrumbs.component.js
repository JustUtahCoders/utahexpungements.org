import React from 'react'
import {Scoped, a, m} from 'kremling'
import {navbarHeight, tertiary, breadcrumbHeight} from 'src/styleguide.js'
import Breadcrumb from './breadcrumb.component.js'
import ScreeningToolCrumb from './screening-tool/screening-tool-crumb.component.js'
import CertificateOfEligibilityCrumb from './certificate-of-eligibility/certificate-of-eligibility-crumb.component.js'
import FilePetitionCrumb from './file-petition/file-petition-crumb.component.js'
import ServePetitionCrumb from './serve-petition/serve-petition-crumb.component.js'

export default class Breadcrumbs extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <nav className="breadcrumbs">
          <Breadcrumb
            isFirst={true}
            name="Expungement tool"
            url="/app"
            childCrumbs={
              <>
                <ScreeningToolCrumb {...this.props} />
                <CertificateOfEligibilityCrumb {...this.props} />
                <FilePetitionCrumb {...this.props} />
                <ServePetitionCrumb {...this.props} />
              </>
            }
          />
        </nav>
      </Scoped>
    )
  }
}

const css = `
  & .breadcrumbs {
    position: fixed;
    top: ${navbarHeight};
    left: 0;
    width: 100vw;
    background-color: ${tertiary};
    height: ${breadcrumbHeight};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 16rem;
  }
`
