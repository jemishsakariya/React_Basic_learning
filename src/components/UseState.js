import React, { useState } from "react";
import "../Home.css";

const UseState = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const [time, setTime] = useState(0);

  const currentTime = () => {
    const cTime = new Date().toLocaleTimeString();
    setTime(cTime);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          position: "relative",
          top: "15rem",
          justifyContent: "center",
          gap: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>{count}</h1>
          <button
            className="btn"
            onClick={() => {
              Increment();
            }}
          >
            Click
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>{time}</h1>
          <button
            className="btn"
            onClick={() => {
              currentTime();
            }}
          >
            Current Time
          </button>
        </div>
      </div>
    </>
  );
};

export default UseState;
