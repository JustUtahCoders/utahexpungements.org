import React from "react";
import { useCss } from "kremling";

export default function NotFound() {
  const scope = useCss(css);
  return (
    <main className="not-found" {...scope}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <button onClick={() => (window.location = "/")}>Back to Home Page</button>
    </main>
  );
}

const css = `
& .not-found {
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-contents: center;
	color: white;
}

& .not-found > h1 {
	font-size: 25rem;
	margin: 0;
}

& .not-found > h2 {
	font-size: 5.5rem;
	margin-top: -5rem;
}
`;
