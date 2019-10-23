import React from "react";
import { Scoped } from "kremling";

export default function Resources(props) {
  return (
    <Scoped css={css}>
      <div className="clinic-line">
        <div>{__("location")}:</div>
        <address>
          LDS Employment Center, 780 West 800 South, Salt Lake City, UT.
        </address>
      </div>
      <div className="clinic-line">
        <div>{__("date")}:</div>
        <div>{__("first thur")}</div>
      </div>
      <div className="clinic-line">
        <div>{__("time")}:</div>
        <div>{__("clinic time")}</div>
      </div>
      <div className="clinic-line">
        <div>{__("sponsored by")}:</div>
        <div>{__("clinic sponsored by")}</div>
      </div>
    </Scoped>
  );
}

const css = `
  & .clinic-line {
    display: flex;
  }

  & .clinic-line >:first-child {
    font-weight: bold;
    margin-right: 4px;
  }
`;
