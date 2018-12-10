import React from 'react'
import {Link} from 'react-router-dom'
import {Scoped} from 'kremling'
import {mediaMobile} from 'src/styleguide.js'

export default function OverviewCard(props) {
  return (
    <Scoped css={css}>
      <div>
        <h2 className="title">{props.title}</h2>
        {props.children}
        {(props.primaryText || props.secondaryText) &&
          <div className="responsive-flex actions">
            {props.primaryText &&
              <Link className="primary button" to={props.primaryHref}>
                {props.primaryText}
              </Link>
            }
            {props.secondaryText &&
              <Link className="secondary button" to={props.secondaryHref}>
                {props.secondaryText}
              </Link>
            }
          </div>
        }
      </div>
    </Scoped>
  )
}

const css = `
  & .title {
    margin-top: 0;
  }

  & .actions {
    margin-top: 16rem;
  }
`
