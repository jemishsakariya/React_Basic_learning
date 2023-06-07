import React, { useEffect, useState } from "react";
import "../Home.css";

const UseEffect = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${num} of times`;
  }, [num]);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>{num}</h1>
        <button
          className="btn"
          onClick={() => {
            setNum(num + 1);
          }}
        >
          Click
        </button>
      </div>
    </>
  );
};

export default UseEffect;
