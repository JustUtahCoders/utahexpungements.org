import React from "react";
import { Scoped } from "kremling";
import { Link } from "react-router-dom";

export default function DetailHighlight(props) {
  return (
    <Scoped css={css}>
      <div className="detail-highlight">
        <Link to={props.link}>
          <img
            className="icon"
            src={props.icon}
            alt="icon"
            title={props.imgTitle}
          />
        </Link>
        <div className="text">
          <h3>{props.title}</h3>
          <div>{props.description}</div>
        </div>
      </div>
    </Scoped>
  );
}

const css = `
  & .icon {
    width: 10rem;
    height: 10rem;
    min-width: 10rem;
    min-height: 10rem;
    cursor: pointer;
  }

  & .detail-highlight {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 1.6rem 4rem;
  }

  & .text {
    max-width: 20rem;
  }
`;
