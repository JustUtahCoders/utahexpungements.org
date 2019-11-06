import React from "react";

export default function DocketPdf(props) {
  const [isProcessing, setIsProcessing] = React.useState(false);
  const formRef = React.useRef();
  const [parse, setParse] = React.useState(null);
  const [err, setErr] = React.useState(null);
  const [processJson, setProcessJson] = React.useState(true);

  React.useEffect(() => {
    if (isProcessing) {
      setParse(null);
      const abortController = new AbortController();

      fetch("/api/docket-pdfs?processJson=" + processJson, {
        method: "POST",
        signal: abortController.signal,
        body: new FormData(formRef.current)
      })
        .then(r => {
          const gotProcessed = data => {
            setIsProcessing(false);
            if (r.ok) {
              setParse({ data, processJson });
            } else {
              throw Error(
                `Server responded with error ${JSON.stringify(data.error)}`
              );
            }
          };
          if (processJson) {
            return r.json().then(gotProcessed);
          } else {
            return r.text().then(gotProcessed);
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
            name="processJson"
            onChange={event => setProcessJson(true)}
            value={true}
            checked={processJson}
          />{" "}
          Processed
          <input
            type="radio"
            name="processJson"
            onChange={event => setProcessJson(false)}
            value={false}
            checked={!processJson}
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
        {parse && (
          <pre>
            {parse.processJson
              ? JSON.stringify(parse.data, null, 2)
              : parse.data}
          </pre>
        )}
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
