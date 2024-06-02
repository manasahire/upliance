import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Load saved count from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    if (savedCount !== null) {
      setCount(Number(savedCount));
    }
  }, []);

  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Calculate background color based on count
  const getBackgroundColor = () => {
    const intensity = Math.min(255, Math.abs(count) * 10);
    return `rgba(255, 0, 0, ${intensity / 255})`;
  };

  return (
    <div
      style={{
        backgroundColor: getBackgroundColor(),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: "40%",
      }}
    >
      <h1>Count: {count}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default Counter;
