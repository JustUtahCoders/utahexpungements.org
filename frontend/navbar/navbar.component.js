import React from "react";
import AppContext from "../app-context.component.js";
import { Scoped } from "kremling";
import Hamburger from "./hamburger.component.js";
import MenuItems from "./menu-items.component.js";
import Logo from "./logo.component.js";
import UserDropdown from "./user-dropdown.component.js";

export default class Navbar extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <Scoped css={css}>
            <nav className="navbar bg-primary">
              <Hamburger {...this.props} />
              <div>
                <UserDropdown context={context} />
              </div>
            </nav>
          </Scoped>
        )}
      </AppContext.Consumer>
    );
  }
}

const css = `
  & .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
  }
`;
