import React from "react";
import { Scoped, always, sometimes } from "kremling";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import classnames from "classnames";

export default class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false
    };
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closeDropdown);
  }

  openDropdown = () => {
    this.setState({ dropdownOpen: true }, () => {
      document.addEventListener("click", this.closeDropdown);
    });
  };

  closeDropdown = () => {
    document.removeEventListener("click", this.closeDropdown);
    this.setState({ dropdownOpen: false });
  };

  toggleDropdown = () => {
    if (this.state.dropdownOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  };

  render() {
    const {
      children,
      contents,
      className,
      openClassName,
      buttonClassName
    } = this.props;
    const { dropdownOpen } = this.state;

    return (
      <Scoped css={css}>
        <div
          className={classnames(className, { [openClassName]: dropdownOpen })}
        >
          <button className="unstyled" onClick={this.toggleDropdown}>
            <div className={classnames(buttonClassName, "dropdown-target")}>
              {children}
              {dropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
          </button>
          {dropdownOpen && <div className="dropdown">{contents}</div>}
        </div>
      </Scoped>
    );
  }
}

const css = `
  & .dropdown {
    position: absolute;
    background-color: white;
    right: 0;
    max-width: 300px;
    box-shadow: 0px 0px 14px grey;
  }

  & .dropdown-target {
    display: flex;
    align-items: center;
  }
`;
