import React from 'react'
import {Scoped} from 'kremling'

export default class Home extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="navbar-margin-top home">
          <div className="hero">
            <h1>
              Expunge a criminal conviction in Utah
            </h1>
            <a href="/app">
              <button className="primary">
                Start an expungement
              </button>
            </a>
            <div className="padding-below" />
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-image: url('static/adventure-blue-sky-clouds-343299.jpg');
    background-position: center;
    background-color: lightgray;
    background-size: cover;
    text-align: center;
    padding: 40rem 16rem;
    height: 500px;
  }

  & .padding-below {
    padding-bottom: 20%;
  }
`
