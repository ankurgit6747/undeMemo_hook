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
