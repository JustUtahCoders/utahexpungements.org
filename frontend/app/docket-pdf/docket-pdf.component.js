import React from "react";

export default function DocketPdf(props) {
  const [isProcessing, setIsProcessing] = React.useState(false);
  const formRef = React.useRef();
  const [parse, setParse] = React.useState(parse);
  const [err, setErr] = React.useState(null);
  const [processType, setProcessType] = React.useState("processed");

  React.useEffect(() => {
    if (isProcessing) {
      setParse(null);
      const abortController = new AbortController();

      fetch("/api/docket-pdfs", {
        method: "POST",
        signal: abortController.signal,
        body: new FormData(formRef.current)
      })
        .then(r => {
          const fun = data => {
            if (r.ok) {
              setIsProcessing(false);
              setParse(data);
            } else {
              throw Error(
                `Server responded with error ${JSON.stringify(data.error)}`
              );
            }
          };
          if (processType === "processed") {
            r.json().then(fun);
          } else {
            r.text().then(fun);
          }
        })
        .catch(err => {
          setIsProcessing(false);
          setErr(err);
        });

      return () => abortController.abort();
    }
  }, [isProcessing, formRef.current]);

  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="pdf-upload">Upload a pdf</label>
        <div style={{ margin: "16px 0" }}>
          <input
            id="pdf-upload"
            name="docket-pdf"
            type="file"
            accept=".pdf"
            required
            onChange={newFile}
          />
        </div>
        <div style={{ margin: "16px 0" }}>
          <input
            type="radio"
            name="processType"
            onChange={event => setProcessType(event.target.value)}
            value="processed"
            checked={processType === "processed"}
          />{" "}
          Processed
          <input
            type="radio"
            name="processType"
            onChange={event => setProcessType(event.target.value)}
            value="rawText"
            checked={processType === "rawText"}
          />{" "}
          Raw Text
        </div>
        <button type="submit" className="primary">
          Process pdf
        </button>
      </form>
      <div style={{ margin: "16px 0" }}>
        {isProcessing && <div>Processing</div>}
        {err && <div>{err.message}</div>}
        {parse && <pre>{JSON.stringify(parse, null, 2)}</pre>}
      </div>
    </>
  );

  function handleSubmit(evt) {
    evt.preventDefault();
    setErr(null);
    setIsProcessing(true);
  }

  function newFile(evt) {
    setParse(null);
    setErr(null);
  }
}
