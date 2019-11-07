import React from "react";
import { Scoped } from "kremling";
import { partial } from "lodash";

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openIndex: props.openIndex
    };
  }

  toggleItem = index => {
    this.setState(prevState => ({
      openIndex: index === prevState.openIndex ? null : index
    }));
  };

  render() {
    const { items, headingClassName } = this.props;
    const { openIndex } = this.state;
    return (
      <Scoped css={css}>
        <div>
          {items.map((item, index) => {
            const open = index === openIndex;
            const caretIcon = open
              ? "/static/icons/svg/002-arrow-down.svg"
              : "/static/icons/svg/001-arrow-right.svg";

            return (
              <div key={index}>
                <div
                  href="#"
                  className={`heading ${headingClassName}`}
                  onClick={partial(this.toggleItem, index)}
                  role="button"
                  tabIndex={index}
                >
                  <img className="caretIcon" src={caretIcon} alt="caret" />
                  {item.heading}
                </div>
                {open && item.body}
              </div>
            );
          })}
        </div>
      </Scoped>
    );
  }
}

const css = `
  & .caretIcon {
    width: 12px;
    margin-right: 12px;
  }

  & .heading {
    text-decoration: none;
    cursor: default;
  }
`;
