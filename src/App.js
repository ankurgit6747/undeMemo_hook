import "./styles.css";
import React, { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const expensiveCalculation = (count) => {
    for (let i = 0; i <= 9999; i++) {}
    return count * 2;
  };

  let memorizeValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div
      className="App"
      style={dark ? { background: "red" } : { background: "gray" }}
    >
      <button onClick={() => setCount(count + 1)}>Add</button>
      <p>{count}</p>
      <button onClick={() => setDark(!dark)}>Change background</button>
      <p>{memorizeValue}</p>
    </div>
  );
}

// use memo hook cache the return value of expensive calculation and
// preventing the rerender on every time the stare is change
// it is similar like a useEffect hook, it also has a depedencies array
// which help us to call this expensive calculation only when the
// the variable is change
// this function is not run on every rerender of page
