import React from "react";
import { Scoped } from "kremling";
import {
  mediaDesktop,
  navbarHeight,
  darkPrimary,
  styleguideCss
} from "frontend/styleguide.js";
import MenuItems from "./menu-items.component.js";
import { Portal } from "react-portal";

export default class Hamburger extends React.Component {
  state = {
    menuOpen: false
  };
  render() {
    return (
      <Scoped css={css}>
        <div
          className="hamburger"
          onClick={this.openMenu}
          role="button"
          tabIndex={0}
        >
          <div />
          <div />
          <div />
        </div>
        {this.state.menuOpen && (
          <Portal>
            <Scoped css={sideMenuCss}>
              <div className="close-hamburger">
                <div />
                <div />
                <div />
              </div>
              <div className="modal-overlay" />
            </Scoped>
          </Portal>
        )}
        <Portal>
          <Scoped css={styleguideCss}>
            <div>
              <MenuItems visible={this.state.menuOpen} />
            </div>
          </Scoped>
        </Portal>
      </Scoped>
    );
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.closeMenu);
  }
  openMenu = () => {
    this.setState({ menuOpen: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };
  closeMenu = () => {
    document.removeEventListener("click", this.closeMenu);
    this.setState({ menuOpen: false });
  };
}

const css = `
  & .hamburger {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    z-index: 10000;
  }

  & .hamburger > * {
    width: 2.4rem;
    border-radius: 0.3rem;
    height: 0.3rem;
    background-color: #fff;
    margin: 0 1.6rem 0.4rem 1.6rem;
    display: block;
  }
`;

const sideMenuCss = `
  & .modal-overlay {
    background-color: #1d1e1f;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    z-index: 1000;
  }

  ${mediaDesktop} {
    & .modal-overlay {
      display: none;
    }
  }

  & .close-hamburger {
    position: fixed;
    top: 0;
    left: 0;
    height: ${navbarHeight};
    background-color: ${darkPrimary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    z-index: 10000;
  }

  & .close-hamburger > * {
    width: 2.4rem;
    border-radius: 0.3rem;
    height: 0.3rem;
    background-color: #fff;
    margin: 0 1.6rem 0.4rem 1.6rem;
    display: block;
  }
`;
