import React from "react";
import RenderPage from "../render-page.component";
import PositionedString from "../pdf-rendering/positioned-string.component";

const farLeft = `11.28%`;

export default function OrderOnPetitionChargesNotFiled_Pdf({
  data,
  renderData
}) {
  const firstPageUrl =
    "/static/forms/order-on-petition-charges-never-filed/08_Order-charges_never_filed-1.png";
  const secondPageUrl =
    "/static/forms/order-on-petition-charges-never-filed/08_Order-charges_never_filed-2.png";
  const thirdPageUrl =
    "/static/forms/order-on-petition-charges-never-filed/08_Order-charges_never_filed-3.png";
  return (
    <>
      <RenderPage url={firstPageUrl}>
        <PositionedString debugKey="fullName" left={farLeft} top="14.06%">
          {`${renderData("person.firstName")} ${renderData(
            "person.middleName"
          )} ${renderData("person.lastName")}`}
        </PositionedString>
      </RenderPage>
    </>
  );
}
