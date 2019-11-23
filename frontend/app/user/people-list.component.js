import React from "react";
import { database } from "../../firebase";
import { groupBy, partial, remove } from "lodash";
import context from "../../context";
import Accordion from "../utils/accordion.component.js";
import CasesList from "./cases-list.component.js";
import { Scoped } from "kremling";
import { Link } from "react-router-dom";

export default class PeopleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    database.getPeople(this.props.user.uid).then(people => {
      this.setState({ people });
    });
    database.getCases(this.props.user.uid).then(cases => {
      this.setState({ cases });
    });
  }

  chooseCase = (person, kase, e) => {
    e.preventDefault();
    context.setContext({
      activePerson: person,
      activeCase: kase
    });
  };

  deleteCase = (person, kase, e) => {
    e.preventDefault();
    const array = [...this.state.cases];
    remove(array, item => {
      return item === kase;
    });
    this.setState({ cases: array });
    context.setContext({
      activePerson: "",
      activeCase: ""
    });
    database.deleteCase(kase.id);
  };

  render() {
    const { cases, people } = this.state;
    const { activeCase } = this.props;

    const groupedCases = groupBy(cases, "personid");
    const accordionItems = people.map(person => {
      const personCases = groupedCases[person.id];
      return {
        heading: (
          <span>
            <strong>{person.name}</strong>
            &nbsp;
            <small className="secondary">
              (<Link to={`/app/people/${person.id}`}>view/edit data</Link>)
            </small>
          </span>
        ),
        body: (
          <div className="accordionBody">
            <CasesList
              cases={personCases}
              chooseCase={partial(this.chooseCase, person)}
              deleteCase={partial(this.deleteCase, person)}
              activeCase={activeCase}
            />
          </div>
        )
      };
    });

    return (
      <Scoped css={css}>
        <div>
          <Accordion
            items={accordionItems}
            openIndex={0}
            headingClassName="accordionHeading"
          />
        </div>
      </Scoped>
    );
  }
}

const css = `
  & .accordionHeading {
    height: 36px;
    display: flex;
    align-items: center;
  }

  & .accordionHeading small {
    display: none;
  }

  & .accordionHeading:hover small {
    display: inline;
  }

  & .accordionBody {
    margin-bottom: 4px;
  }
`;
