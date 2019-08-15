import React from "react";
import { Link } from "react-router-dom";

export default class PetitionOverview extends React.Component {
  render() {
    return (
      <section>
        <p>
          Before you can petition to expunge records, Make sure you have a{" "}
          <br />
          <Link to={`certificate-of-eligibility`}>
            <strong>Certificate of Eligibility</strong>
          </Link>
          .
        </p>
        <p>
          If you <em>have</em> obtained your Certificate of Eligibility, you
          should file immediately as it is only valid for 90 days
        </p>
        <p>
          The <strong>original</strong> Certificate of Eligibility must be
          attached to the <strong>Petition to Expunge records</strong>.
        </p>
        <Link to={"file-petition/petition-navigator"}>
          <button className="primary">
            I have my Certificate of Eligibility
          </button>
        </Link>
      </section>
    );
  }
}
