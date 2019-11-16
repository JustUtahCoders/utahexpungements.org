import React from "react";
import { Scoped, always } from "kremling";
import styleguideCss, { mediaDesktop } from "frontend/styleguide.js";
import MenuItems from "./menu-items.component.js";
import { Portal } from "react-portal";

export default class Hamburger extends React.Component {
  state = {
    menuOpen: false
  };
  render() {
    return (
      <Scoped css={css}>
        <button
          className={always("unstyled hamburger").maybe(
            "active",
            this.state.menuOpen
          )}
          onClick={this.openMenu}
        >
          <div />
          <div />
          <div />
        </button>
        {this.state.menuOpen && (
          <Portal>
            <Scoped css={sideMenuCss}>
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    cursor: pointer;
    z-index: 111;
  }

  & .hamburger > div {
    width: 2.4rem;
    border-radius: 0.3rem;
    height: 0.3rem;
    background-color: #fff;
    margin: 0 1.6rem 0.4rem 1.6rem;
    transition: all 0.3s linear;
    will-change: opacity, transform;
  }

  & :focus {
    outline: none;
  }

  & .active > :first-child {
    transform: rotate(45deg) translateY(1rem);
  }

  & .active > :nth-child(2) {
    opacity: 0;
    transform: translateX(0.25rem);
  }

  & .active > :nth-child(3) {
    transform: rotate(-45deg) translateY(-1rem);
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
`;
