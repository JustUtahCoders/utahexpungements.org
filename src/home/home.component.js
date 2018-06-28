import React from 'react'
import {Scoped} from 'kremling'

export default class Home extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="navbar-margin-top home">
          <div className="hero">
            <img className="hero-image" src="static/adventure-blue-sky-clouds-343299.jpg" />
            <div className="hero-content">
              <h1>
                Self service expungements for Utah
              </h1>
              <a href="/app">
                <button className="primary">
                  Start an expungement
                </button>
              </a>
            </div>
          </div>
        </div>
      </Scoped>
    )
  }
}

const css = `
  & .home {
    position: relative;
  }

  & .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }

  & .hero-image {
    z-index: 0;
    width: 100%;
  }

  & .hero-content {
    z-index: 10;
    position: absolute;
    margin-top: 20%;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`
