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
              Expunge a criminal conviction in Utah
            </h1>
            <div className="actions">
              <Link to="/app">
                <button className="primary">
                  Start an expungement
                </button>
              </Link>
              <a href="https://utahexpungements.freeflarum.com" target="_blank">
                <button className="secondary">
                  Community forum
                </button>
              </a>
            </div>
            <div className="padding-below" />
          </div>
          <div className="more-details">
            <DetailHighlight
              icon="/static/icons/svg/007-user-4.svg"
              title="Completely free to use!"
              description={<>This website is <Link className="underline" to="/about-us">built by Utah community members for Utah community members</Link>. We'll never charge you anything.</>}
            />
            <DetailHighlight
              icon="/static/icons/svg/008-chat-2.svg"
              title="Ask and answer questions"
              description={<>Join our <a className="underline" href="https://utahexpungements.freeflarum.com" target="_blank">discussion forum</a> to ask and answer questions about the expungement process in Utah.</>}
            />
            <DetailHighlight
              icon="/static/icons/svg/025-presentation.svg"
              title="Find out if you qualify"
              description={<>Our <Link className="underline" to="/app/are-you-eligible">screening tool</Link> will help you understand if and when your convictions are ready to be expunged from your criminal record.</>}
            />
            <DetailHighlight
              icon="/static/icons/svg/003-laptop.svg"
              title="Fill out the paperwork online"
              description="Enter your information in a web form and we'll generate the documents you'll need to file with the courts."
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
    background-image: url('static/adventure-blue-sky-clouds-343299.jpg');
    background-position: center;
    background-color: ${lightGray};
    background-size: cover;
    text-align: center;
    height: 500rem;
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
