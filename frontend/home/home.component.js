import React from "react";
import { Scoped } from "kremling";
import { Link } from "react-router-dom";
import {
  mediaMobile,
  mediaDesktop,
  primary,
  lightGray
} from "frontend/styleguide.js";
import DetailHighlight from "./detail-highlight.component.js";
import Footer from "frontend/footer/footer.component.js";
import emailValidator from "email-validator";
import { createLead } from "frontend/firebase/database.js";

export default class Home extends React.Component {
  state = {
    emailSignup: "",
    signedUp: false
  };
  render() {
    return (
      <Scoped css={css}>
        <div className="navbar-margin-top home">
          <div className="hero">
            <div className="hero-main" onSubmit={this.createLead}>
              <div className="main-content">
                <h1>Expunge a criminal conviction in Utah</h1>
                {this.state.signedUp ? (
                  <>
                    <div className="enter-your-email">
                      Thanks! We'll get back to you soon. In the meantime...
                    </div>
                    <div className="actions">
                      <Link to="/app">
                        <button className="primary">
                          {__("home page primary action")}
                        </button>
                      </Link>
                      <Link to="/app/forms">
                        <button
                          className="secondary"
                          style={{
                            border: "1px solid white",
                            marginLeft: "1.6rem"
                          }}
                        >
                          {__("fill out forms")}
                        </button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="enter-your-email">
                      Enter your email address to join our list of beta testers.
                    </div>
                    <form className="actions">
                      <input
                        className="juicy-input"
                        type="text"
                        value={this.state.emailSignup}
                        onChange={this.changeEmail}
                        placeholder="youremail@gmail.com"
                      />
                      <button className="primary" type="submit">
                        Sign up
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="more-details">
            <DetailHighlight
              icon="/static/icons/svg/007-user-4.svg"
              title={__("free to use")}
              description={
                <>
                  {__("ftu descr")[0]}
                  <Link className="underline" to="/about">
                    {__("ftu descr")[1]}
                  </Link>
                  {__("ftu descr")[2]}
                </>
              }
              link="/about"
              imgTitle="about us"
            />
            <DetailHighlight
              icon="/static/icons/svg/025-presentation.svg"
              title={__("find out qualify")}
              description={
                <>
                  {__("foq descr")[0]}
                  <Link className="underline" to="/app/tool/are-you-eligible">
                    {__("foq descr")[1]}
                  </Link>
                  {__("foq descr")[2]}
                </>
              }
              link="/app/tool/are-you-eligible"
              imgTitle="screening tool"
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
              link="/app/forms"
              imgTitle="forms"
            />
          </div>
          <Footer />
        </div>
      </Scoped>
    );
  }
  changeEmail = evt => {
    this.setState({ emailSignup: evt.target.value });
  };
  createLead = evt => {
    evt.preventDefault();
    const email = this.state.emailSignup;
    if (emailValidator.validate(email)) {
      this.setState({ emailSignup: "", signedUp: true }, () => {
        createLead(email);
      });
    }
  };
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
    height: 35rem;
  }

  & .hero > h1 {
    color: white;
    text-shadow: 0 0 20px black;
  }

  & .padding-below {
    padding-bottom: 10%;
  }

  & .hero-main {
    padding: 3rem 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .hero-main h1 {
    margin-bottom: 2rem;
  }

  & .enter-your-email {
    font-size: 2rem;
  }

  & .actions {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .juicy-input {
    font-size: 2.4rem;
  }

  ${mediaDesktop} {
    & .actions > *:first-child {
      margin-right: 2.4rem;
    }

    & .hero-main {
      padding: 0% 20%;
    }
  }

  ${mediaMobile} {
    & .more-details {
      flex-direction: column;
    }

    & .actions {
      flex-direction: column;
    }

    & .actions > *:first-child {
      margin-bottom: 2.4rem;
    }

    & .hero-main {
      padding: 0% 5%;
    }
  }

  & .more-details {
    background-color: white;
    width: 100vw;
    padding: 3.2rem 4.8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }

  & .underline {
    text-decoration: underline;
  }
`;
