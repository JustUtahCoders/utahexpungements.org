import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import OverviewCard from "../overview-card.component.js";
import { definitionComponents, definedWords } from "./defined-terms.helper.js";
import { Scoped } from "kremling";

export default function Vocabulary(props) {
  const containerDiv = useRef(null);

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    let anchoredWord;
    try {
      anchoredWord = containerDiv.current.querySelector(window.location.hash);
    } catch (err) {
      // invalid selector is in the hash. Do nothing
    }

    if (anchoredWord) {
      anchoredWord.open = true;
      const timeoutId = setTimeout(() => {
        anchoredWord.offsetParent.scrollTop = anchoredWord.offsetTop;
      });

      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <OverviewCard
      title={__("vocabulary")}
      primaryText={__("get started")}
      primaryHref="/app/tool/are-you-eligible"
    >
      <Scoped css={css}>
        <div ref={containerDiv}>
          <p>
            As you work on your expungement, here are some words that will come
            up that are good ones to know.
          </p>
          {definedWords.map(definedWord => {
            const Definition = definitionComponents[definedWord];
            const id = definedWord.replace(/ /g, "-");

            return (
              <section key={definedWord}>
                <details className="defined-word" id={id}>
                  <summary className="summary">
                    <span className="expandable-word">
                      {__(`def word - ${definedWord}`)}
                    </span>
                    <Link to={`#${id}`} className="link-to-word">
                      link
                    </Link>
                  </summary>
                  <Definition />
                </details>
              </section>
            );
          })}
        </div>
      </Scoped>
    </OverviewCard>
  );
}

const css = `
  & .expandable-word {
    text-transform: capitalize;
    font-weight: bold;
  }

  & .link-to-word {
    display: none;
    text-decoration: none;
    margin-left: 0.8rem;
    color: var(--color-secondary);
  }

  & .link-to-word:hover {
    text-decoration: underline;
  }

  & .summary:hover .link-to-word, .summary:focus .link-to-word {
    display: inline;
  }
`;
