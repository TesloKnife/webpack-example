import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

const root = createRoot(document.getElementById("app"));

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h1>Hello React + Webpack</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
}

root.render(<App />);
