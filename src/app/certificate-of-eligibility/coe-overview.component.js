import React from "react";
import { Link } from "react-router-dom";
import { Scoped } from "kremling";

export default class COEOverview extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <h1>Certificate of Eligibility</h1>
        <p>
          A{" "}
          <a
            href="https://www.utcourts.gov/howto/expunge/#cert"
            target="_blank"
          >
            certificate of eligibility
          </a>{" "}
          is a document issued by the{" "}
          <a href="https://bci.utah.gov/" target="_blank">
            Bureau of Criminal Identification (BCI)
          </a>{" "}
          that means you qualify for an expungement.
        </p>
        <p>
          To obtain the certificate, you must fill out an{" "}
          <a
            href="https://bci.utah.gov/wp-content/uploads/sites/15/2018/07/Exp-App-7-2018.pdf"
            target="_blank"
          >
            application
          </a>{" "}
          and give that application to the BCI, either in person or by mail.
        </p>
        <p>
          As part of filling out the application, you will need to be
          fingerprinted. This can be done by a Utah police department, a county
          sheriff's office, or by the BCI itself when you submit the
          application. The person who takes your fingerprints needs to fill out
          part of the application with information about who took the
          fingerprints and when they were taken.
        </p>
        <p>
          Additionally, you will need to pay a fee of $65 when you apply. This
          can be paid either in person at the BCI office or be included in the
          envelope when you mail in the application. You can pay with cash,
          check, money order, or credit card. Keep in mind that{" "}
          <span className="may-not">cash will not be accepted via mail</span>.
          Before paying the fee,{" "}
          <Link to="/app/are-you-eligible">check out our screening tool</Link>,
          which will help you know if your application is likely to be accepted.
        </p>
        <p>
          It usually takes approximately 4-6 months to hear back from the BCI.
          They will send you a letter that lets you know if you qualify. If you
          do, they'll also give you the Certificate of Eligibility. You only
          have 90 days to use that certificate, so make sure to check out{" "}
          <Link to="/app/file-petition">
            how to use the Certificate of Eligibility
          </Link>{" "}
          as soon as you hear back from the BCI!
        </p>
        <Link to={this.props.match.url + "/adult-coe-form"}>
          <button className="primary">Fill out the application</button>
        </Link>
      </Scoped>
    );
  }
}

const css = `
  & .may-not {
    font-weight: bold;
    font-style: italic;
  }
`;
