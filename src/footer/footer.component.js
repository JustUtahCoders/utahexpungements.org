import React from "react";
import { Scoped } from "kremling";
import { secondary } from "src/styleguide.js";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <div className="footer">
          <div className="link-groups">
            <ul className="links">
              <Link to="/">
                <li>{__("home page")}</li>
              </Link>
              <Link to="/app/overview">
                <li>{__("what is expg")}</li>
              </Link>
              <a href="https://utahexpungements.boards.net" target="_blank">
                <li>{__("ask a question")}</li>
              </a>
            </ul>
            <ul className="links">
              <Link to="/about">
                <li>{__("about")}</li>
              </Link>
              <a href="https://utahexpungements.boards.net" target="_blank">
                <li>{__("community forum")}</li>
              </a>
              <Link to="/contribute">
                <li>{__("report problem")}</li>
              </Link>
            </ul>
          </div>
          <div className="attribution">
            {__("cover image credit")} &copy;{" "}
            <a href="http://bretlittle.com">Bret Little</a> 2018
          </div>
        </div>
      </Scoped>
    );
  }
}

const css = `
  & .footer {
    background-color: ${secondary};
    width: 100vw;
    padding: 48rem 0rem;
  }

  & .link-groups {
    display: flex;
    justify-content: center;
  }

  & .links {
    padding: 0 16rem;
  }

  & .links a {
    text-decoration: none;
  }

  & .links a:hover {
    text-decoration: underline;
  }

  & .links li {
    padding: 4rem 0;
  }

  & .attribution {
    font-size: 12px;
    text-align: center;
    padding-top: 20px;
  }
`;
