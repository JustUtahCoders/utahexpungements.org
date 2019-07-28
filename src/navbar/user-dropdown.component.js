import React from "react";
import { Scoped } from "kremling";
import { Link } from "react-router-dom";
import Dropdown from "../app/utils/dropdown.component.js";
import {
  MdFolderShared,
  MdCreateNewFolder,
  MdExitToApp,
  MdPerson,
  MdPersonAdd
} from "react-icons/md";
import { darkPrimary, lightGray } from "src/styleguide.js";
import { noop } from "lodash";
import { auth } from "../firebase";

export default class UserDropdown extends React.Component {
  createDropdownLink = (label, icon, href) => (
    <Link key={label} to={href}>
      {this.createDropdownButton(label, icon)}
    </Link>
  );

  createDropdownButton = (label, icon, onClick) => (
    <button
      key={label}
      className="unstyled user-dropdown-item-button"
      onClick={onClick || noop}
    >
      <div className="user-dropdown-item">
        {icon}
        <div className="user-dropdown-item-label">{label}</div>
      </div>
    </button>
  );

  logout = () => {
    auth.doSignOut();
    window.location = "/";
  };

  render() {
    const { activePerson, activeCase, authUser } = this.props.context;

    const dropdownContents = authUser
      ? [
          this.createDropdownLink(
            "Dashboard",
            <MdFolderShared />,
            "/app/dashboard"
          ),
          this.createDropdownLink(
            "Start a new case",
            <MdCreateNewFolder />,
            "/app/cases/create"
          ),
          this.createDropdownButton("Log out", <MdExitToApp />, this.logout)
        ]
      : [
          this.createDropdownLink("Log in", <MdPerson />, "/app/login"),
          this.createDropdownLink("Sign up", <MdPersonAdd />, "/app/sign-up")
        ];

    return (
      <Scoped css={css}>
        <div>
          <Dropdown
            contents={
              <div className="user-dropdown-contents">{dropdownContents}</div>
            }
            className="user-dropdown"
            openClassName="user-dropdown-open"
            buttonClassName="user-dropdown-button"
          >
            {authUser ? (
              <div className="user-info">
                Welcome, {authUser.email}
                {activePerson && activeCase && (
                  <span className="subtitle">
                    Current case: {activePerson.name}, {activeCase.name}
                  </span>
                )}
              </div>
            ) : (
              <div className="user-info">utahexpungements.org</div>
            )}
          </Dropdown>
        </div>
      </Scoped>
    );
  }
}

const css = `
  & .user-info {
    color: white;
    font-weight: bold;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 10px;
  }

  & .user-info .subtitle {
    font-size: 10px;
    font-weight: normal;
  }

  & .user-dropdown {
    color: white;
  }

  & .user-dropdown-button {
    padding: 0 8px;
  }

  & .user-dropdown-open .user-dropdown-button {
    background-color: ${darkPrimary};
  }

  & .user-dropdown-item {
    color: initial;
    padding: 10px 20px;
    display: flex;
    align-items: center;
  }

  & .user-dropdown-item:hover {
    background-color: ${lightGray};
  }

  & .user-dropdown-item-button {
    width: 100%;
  }

  & .user-dropdown-item-label {
    margin-left: 16rem;
  }

  & .user-dropdown-contents {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
  }
`;
