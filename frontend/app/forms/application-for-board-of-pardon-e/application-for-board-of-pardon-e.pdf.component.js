import React from "react";
import RenderPage from "../render-page.component.js";
import { Scoped, a, m, useCss } from "kremling";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import moment from "moment";

export default function ApplicationForBoardOfPardonExpungement_Pdf({
  renderData,
  data
}) {
  const scope = useCss(css);
  return (
    <React.Fragment>
      <RenderPage url="/static/forms/application-for-board-of-pardon-e/BOP-Exp-App-08-09-2019-Mail-In-1.png">
        <div {...scope}>
          <PositionedString
            debugKey="personName"
            left="11.5%"
            top={line1Top}
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "55.47%"
            }}
          >
            <div>{renderData("person.lastName")}</div>
            <div>{renderData("person.firstName")}</div>
            <div>{renderData("person.middleName")}</div>
          </PositionedString>
          <PositionedString
            dataKey="person.birthday"
            left="81.76%"
            top={line1Top}
          />
          <PositionedString
            dataKey="person.previouslyUsedNames"
            left="42.88%"
            top="22.82%"
          />
          <PositionedString debugKey="mailingAddress" left="31.88%" top="25.6%">
            {`${renderData("person.addressStreet")}, ${renderData(
              "person.addressCity"
            )}, ${renderData("person.addressState")} ${renderData(
              "person.addressZip"
            )}`}
          </PositionedString>
          <PositionedString
            dataKey="person.socialSecurity"
            left="24.18%"
            top={line4Top}
          />
          <PositionedString
            dataKey="person.driversLicenseNumber"
            left="67.06%"
            top={line4Top}
          />
          <PositionedString
            dataKey="person.driversLicenseState"
            left="88.00%"
            top={line4Top}
          />
          <PositionedString
            debugKey="nameOfPetitioner"
            left="13.05%"
            top="38.4%"
          >
            {renderData("person.firstName")} {renderData("person.lastName")}
          </PositionedString>
          <CurrentDate left="68.12%" top="42.8%" />
          <PositionedCheckmark
            debugKey="check"
            left="5.90%"
            top="85.7%"
            shouldShow={data.paymentMethod === "check"}
          />
          <PositionedCheckmark
            debugKey="creditCard"
            left="5.90%"
            top={creditCardTop}
            shouldShow={data.paymentMethod === "creditCard"}
          />
          <PositionedCheckmark
            debugKey="visa"
            left="15.82%"
            top={creditCardTop}
            shouldShow={
              data.paymentMethod === "creditCard" &&
              data.creditCardIssuer === "visa"
            }
          />
          <PositionedCheckmark
            debugKey="mastercard"
            left="22.72%"
            top={creditCardTop}
            shouldShow={
              data.paymentMethod === "creditCard" &&
              data.creditCardIssuer === "mastercard"
            }
          />
          <PositionedCheckmark
            debugKey="discover"
            left="33.72%"
            top={creditCardTop}
            shouldShow={
              data.paymentMethod === "creditCard" &&
              data.creditCardIssuer === "discover"
            }
          />
          <PositionedCheckmark
            debugKey="amex"
            left="43.1%"
            top={creditCardTop}
            shouldShow={
              data.paymentMethod === "creditCard" &&
              data.creditCardIssuer === "amex"
            }
          />
          {data.paymentMethod === "creditCard" && creditCardInfo({ data })}
          {data.paymentMethod === "creditCard" && (
            <PositionedString
              dataKey="nameOnCard"
              left="33.61%"
              top={nameOnCardTop}
            />
          )}
          {data.paymentMethod === "creditCard" && (
            <React.Fragment>
              <PositionedString
                dataKey="cardZip"
                left="79.12%"
                top={nameOnCardTop}
              />
            </React.Fragment>
          )}
        </div>
      </RenderPage>
    </React.Fragment>
  );
}

function creditCardInfo({ data }) {
  const cardNumber = data.cardNumber || "";
  const individualCardNumbers = cardNumber.split("").slice(0, 16);

  const securityNumber = data.cardSecurityNumber || "";
  const individualSecurityNumbers = securityNumber.split("").slice(0, 4);

  const expMonthDay =
    (data.cardExpirationMonth || "") + (data.cardExpirationYear || "");
  const individualExpNumbers = expMonthDay.split("").slice(0, 4);

  return (
    <Scoped css={css}>
      {individualCardNumbers.map((number, index) => {
        const leftWithoutGaps = firstCardNumberLeft + index * 3.08;
        const numGaps = Math.floor(index / 4);
        const leftWithGaps = leftWithoutGaps + numGaps * 1.4;
        return (
          <div
            key={`cardNumber-${index}`}
            className="cardNumber"
            style={{ left: leftWithGaps + "%" }}
          >
            {number}
          </div>
        );
      })}
      {individualSecurityNumbers.map((number, index) => {
        const left = firstSecurityNumberLeft + index * 3.08;
        return (
          <div
            key={`securityNumber-${index}`}
            className="cardNumber"
            style={{ left: left + "%" }}
          >
            {number}
          </div>
        );
      })}
      {individualExpNumbers.map((number, index) => {
        const left = firstExpNumberLeft + index * 3.08;
        return (
          <div
            key={`exp-${index}`}
            className="cardNumber"
            style={{ left: left + "%" }}
          >
            {number}
          </div>
        );
      })}
    </Scoped>
  );
}

const line1Top = `18.61%`;
const line4Top = `29.73%`;
const creditCardTop = `87.00%`;
const cardNumberTop = `91.4%`;
const firstCardNumberLeft = 6.38;
const firstSecurityNumberLeft = 65.85;
const firstExpNumberLeft = 82;
const nameOnCardTop = `81.5%`;

// original png is 1700 x 2200 px
const css = `
  & .cardNumber {
    position: absolute;
    top: ${cardNumberTop};
    width: 2.53%;
    height: 2.41%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .cardNumber * {
    position: absolute;
  }
`;
