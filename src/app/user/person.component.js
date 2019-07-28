import React from "react";
import { Scoped } from "kremling";
import { database } from "../../firebase";
import { Link } from "react-router-dom";
import { isEmpty, map, startCase } from "lodash";

export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      cases: null
    };
  }

  componentDidMount() {
    const uid = this.props.context.authUser.uid;
    const personId = this.props.match.params.id;
    database.getPerson(personId).then(person => {
      this.setState({
        person
      });
    });
    database.getCasesForPerson(uid, personId).then(cases => {
      this.setState({ cases });
    });
  }

  render() {
    const { person, cases } = this.state;
    return (
      <Scoped css={css}>
        <div>
          {person && cases ? (
            <div>
              <h1>{person.name}</h1>
              <p>
                This data is automatically populated as you{" "}
                <Link to="/app/forms">fill out forms</Link> for this person.
              </p>
              <h2>Person Data</h2>
              <div>
                {map(person.data, (value, key) => (
                  <div key={key}>
                    <strong>{startCase(key)}</strong>: {value}
                  </div>
                ))}
                {isEmpty(person.data) && (
                  <div>
                    <em>No data found for this person.</em>
                  </div>
                )}
              </div>
              <h2>Case Data</h2>
              {cases.map(kase => (
                <div key={kase.id}>
                  <h3>{kase.name}</h3>
                  {map(kase.data, (value, key) => (
                    <div key={key}>
                      <strong>{startCase(key)}</strong>: {value}
                    </div>
                  ))}
                  {isEmpty(kase.data) && (
                    <div>
                      <em>No data found for this case.</em>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Scoped>
    );
  }
}

const css = `
`;
