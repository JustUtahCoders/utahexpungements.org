import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, Route } from "react-router-dom";
import { Scoped, a, m } from "kremling";
import { definitionComponents } from "./defined-terms.helper.js";

const DefinedTermContext = React.createContext({ alwaysLink: false });

export default function DefinedTerm(props) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const containerRef = useRef(null);
  const alwaysLink =
    useContext(DefinedTermContext).alwaysLink || props.alwaysLink;
  useEffect(() => {
    if (tooltipOpen) {
      document.addEventListener("click", maybeCloseTooltip);
    } else {
      document.removeEventListener("click", maybeCloseTooltip);
    }

    return () => {
      document.removeEventListener("click", maybeCloseTooltip);
    };
  }, [tooltipOpen]);

  const children = props.children || __(`def word - ${props.term}`);
  const Definition = definitionComponents[props.term];
  const containerEl = containerRef.current;

  return (
    <Scoped css={css}>
      <span ref={containerRef}>
        <Route
          path="/app/overview/vocabulary"
          children={routeProps =>
            routeProps.match || alwaysLink ? (
              <Link
                to={`/app/overview/vocabulary#${props.term.replace(/ /g, "-")}`}
              >
                {children}
              </Link>
            ) : (
              <>
                <button
                  className="unstyled tooltip-trigger"
                  onClick={openTooltip}
                  onFocus={openTooltip}
                >
                  {children}
                </button>
                {tooltipOpen && tooltip()}
              </>
            )
          }
        />
      </span>
    </Scoped>
  );

  function tooltip() {
    const horizontalProperty =
      containerEl.offsetLeft <= containerEl.offsetParent.clientWidth / 2
        ? "left"
        : "right";
    const capitalizedHorizontalProperty =
      horizontalProperty.charAt(0).toUpperCase() + horizontalProperty.slice(1);
    return (
      <div
        className="popup"
        style={{
          top: containerEl.offsetTop + containerEl.offsetHeight + 4 + "px",
          [horizontalProperty]:
            containerEl[`offset${capitalizedHorizontalProperty}`] + "px"
        }}
      >
        <DefinedTermContext.Provider value={{ alwaysLink: true }}>
          <Definition />
        </DefinedTermContext.Provider>
        <div className="got-it">
          <button className="primary" onClick={closeTooltip}>
            {__("got it")}
          </button>
        </div>
      </div>
    );
  }

  function openTooltip() {
    setTooltipOpen(true);
  }

  function maybeCloseTooltip(evt) {
    if (
      containerRef.current === evt.target ||
      containerRef.current.contains(evt.target)
    ) {
      // clicked on or inside of the popup
      return;
    } else {
      closeTooltip();
    }
  }

  function closeTooltip() {
    setTooltipOpen(false);
  }
}

const css = `
  & .tooltip-trigger {
    text-decoration: underline;
  }

  & .popup {
    z-index: 100;
    position: absolute;
    width: 50%;
    max-width: 450rem;
    border: 1rem solid #afafaf;
    padding: 0 8rem;
    box-shadow: 0 16px 50px -24px #212224;
    background-color: #f3f3f3;
    border-radius: 6rem;
  }

  & .got-it {
    display: flex;
    justify-content: center;
    margin: 8rem 0;
  }
`;
