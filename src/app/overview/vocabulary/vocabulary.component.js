import React from 'react'
import OverviewCard from '../overview-card.component.js'
import definedWords from './defined-words.helper.js'
import {Scoped} from 'kremling'

export default function Vocabulary(props) {
  return (
    <OverviewCard
      title={__("vocabulary")}
      primaryText={__("get started")}
      primaryHref="/app/tool"
    >
      <Scoped css={css}>
        <p>
          As you work on your expungement, here are some words that will come up that are good ones to know:
        </p>
        {definedWords.map(definedWord => (
          <section key={definedWord}>
            <details>
              <summary className="defined-word">
                {__(`def word - ${definedWord}`)}
              </summary>
              {__(`def - ${definedWord}`)}
            </details>
          </section>
        ))}
      </Scoped>
    </OverviewCard>
  )
}

const css = `
  & .defined-word {
    text-transform: capitalize;
  }
`
