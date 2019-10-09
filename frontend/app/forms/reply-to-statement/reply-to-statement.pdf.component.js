import React from "react";
import RenderPage from "../render-page.component";

const farLeft = "11.28%";

export default function ReplyToStatement_Pdf({ data, renderData }) {
  const firstPageUrl =
    "/static/forms/reply-to-statement/03_Petitioner_Reply-1.png";
  const secondPageUrl =
    "/static/forms/reply-to-statement/03_Petitioner_Reply-2.png";
  const thirdPageUrl =
    "/static/forms/reply-to-statement/03_Petitioner_Reply-3.png";
  return (
    <>
      <RenderPage url={firstPageUrl} />

      <RenderPage url={secondPageUrl} />

      <RenderPage url={thirdPageUrl} />
    </>
  );
}
