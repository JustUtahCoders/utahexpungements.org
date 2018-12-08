import React from 'react'
import {Scoped} from 'kremling'
import {Link} from 'react-router-dom'
import {mediaMobile, mediaDesktop, primary, lightGray} from 'src/styleguide.js'
import DetailHighlight from './detail-highlight.component.js'
import Footer from 'src/footer/footer.component.js'

export default class Home extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="navbar-margin-top home">
          <div className="hero">
            <h1>
              {__("home page title")}
            </h1>
            <div className="actions">
              <Link to="/app">
                <button className="primary">
                  {__("home page primary action")}
                </button>
              </Link>
              <Link to="/app/forms">
                <button className="secondary">
                  {__("fill out forms")}
                </button>
              </Link>
            </div>
            <div className="padding-below" />
          </div>
          <div className="more-details">
            <DetailHighlight
              icon="/static/icons/svg/007-user-4.svg"
              title={__("free to use")}
              description={<>{__("ftu descr")[0]}<Link className="underline" to="/about">{__("ftu descr")[1]}</Link>{__("ftu descr")[2]}</>}
            />
            <DetailHighlight
              icon="/static/icons/svg/008-chat-2.svg"
              title={__("ask questions")}
              description={<>{__("ask questions descr")[0]}<a className="underline" href="https://utahexpungements.boards.net" target="_blank">{__("ask questions descr")[1]}</a>{__("ask questions descr")[2]}</>}
            />
            <DetailHighlight
              icon="/static/icons/svg/025-presentation.svg"
              title={__("find out qualify")}
              description={<>{__("foq descr")[0]}<Link className="underline" to="/app/are-you-eligible">{__("foq descr")[1]}</Link>{__("foq descr")[2]}</>}
            />
            <DetailHighlight
              icon="/static/icons/svg/003-laptop.svg"
              title={__("fill out paperwork")}
              description={
                <>
                  {__("fop descr")[0]}
                  <Link className="underline" to="/app/forms">
                    {__("fop descr")[1]}
                  </Link>
                  {__("fop descr")[2]}
                </>
              }
            />
          </div>
          <Footer />
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
    background-image: url('static/utah-bret-little.jpg');
    background-position: center;
    background-color: ${lightGray};
    background-size: cover;
    text-align: center;
    height: 500rem;
  }

  & .hero > h1 {
    color: white;
    text-shadow: 0 0 20px black;
  }

  & .hero button {
    box-shadow: 0 0 20px black;
  }

  & .padding-below {
    padding-bottom: 10%;
  }

  ${mediaDesktop} {
    & .actions {
      display: flex;
      flex-direction: row;
    }

    & .actions > * {
      margin-right: 16px;
    }

    & .actions > *:last-child {
      margin-right: 0;
    }
  }

  ${mediaMobile} {
    & .actions {
      display: flex;
      flex-direction: column;
    }

    & .actions > * {
      margin-bottom: 16px;
    }

    & .actions > *:last-child {
      margin-bottom: 0;
    }

    & .more-details {
      flex-direction: column;
    }
  }

  & .more-details {
    background-color: white;
    width: 100vw;
    padding: 32rem 48rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  & .underline {
    text-decoration: underline;
  }
`
