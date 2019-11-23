import React from "react";
import { partial } from "lodash";
import { Scoped } from "kremling";
import { veryLightGray } from "frontend/styleguide.js";
import { Link } from "react-router-dom";

export default class CasesList extends React.Component {
  render() {
    const { cases, chooseCase, deleteCase, activeCase = {} } = this.props;
    return (
      <Scoped css={css}>
        <div>
          {!cases || cases.length === 0 ? (
            <div className="row">
              <div>
                No cases found.{" "}
                <Link to="/app/cases/create">Create a new case</Link>.
              </div>
            </div>
          ) : (
            cases.map(kase => (
              <div className="row" key={kase.id}>
                <div>{kase.name}</div>
                <div>
                  {kase.id === activeCase.id ? (
                    <button disabled className="secondary small">
                      Working on case
                    </button>
                  ) : (
                    <button
                      className="primary small"
                      onClick={partial(chooseCase, kase)}
                    >
                      Work on case
                    </button>
                  )}
                  <button
                    className="danger small"
                    onClick={partial(deleteCase, kase)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </Scoped>
    );
  }
}

const css = `
  & .row {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px;
    padding-left: 8px;
  }

  & .row:nth-child(odd) {
    background-color: ${veryLightGray};
  }

  & .row button {
    margin-top: 0;
    margin-right: 4px;
  }

  & .row button:last-child {
    margin-right: 0;
    margin-left: 0;
  }
`;
