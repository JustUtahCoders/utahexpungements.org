import React from 'react'
import {Scoped} from 'kremling'
import {mediaDesktop, navbarHeight, primary, darkPrimary, secondary, boxShadow3} from 'src/styleguide.js'
import MenuItems from './menu-items.component.js'
import {Modal} from 'react-disposable-modal'

export default class Hamburger extends React.Component {
  state = {
    menuOpen: false,
  }
  render() {
    return (
      <Scoped css={css}>
        <div className="hamburger" onClick={this.openMenu}>
          <div />
          <div />
          <div />
        </div>
        {this.state.menuOpen &&
          <Modal>
            <Scoped css={sideMenuCss}>
              <div className="close-hamburger">
                <div />
                <div />
                <div />
              </div>
              <nav className="side-menu">
                <MenuItems
                  orientation="vertical"
                />
              </nav>
              <div className="modal-overlay" />
            </Scoped>
          </Modal>
        }
      </Scoped>
    )
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.closeMenu)
  }
  openMenu = () => {
    this.setState({menuOpen: true}, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }
  closeMenu = () => {
    document.removeEventListener('click', this.closeMenu)
    this.setState({menuOpen: false})
  }
}

const css = `
  ${mediaDesktop} {
    & .hamburger {
      display: none !important;
    }
  }

  & .hamburger {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    z-index: 10000;
  }

  & .hamburger > * {
    width: 24rem;
    border-radius: 3rem;
    height: 3rem;
    background-color: #fff;
    margin: 0 16rem 4rem 16rem;
    display: block;
  }
`

const sideMenuCss = `
  ${mediaDesktop} {
    & .side-menu {
      display: none !important;
    }
  }

  & .side-menu {
    position: fixed;
    top: ${navbarHeight};
    left: 0;
    background-color: ${secondary};
    box-shadow: ${boxShadow3};
    z-index: 10000;
  }

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
    width: 24rem;
    border-radius: 3rem;
    height: 3rem;
    background-color: #fff;
    margin: 0 16rem 4rem 16rem;
    display: block;
  }
`
