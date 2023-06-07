import React from "react";
import { useReducer } from "react";
import "../Home.css";

const reducer = (state, action) => {
  if (action.type === "INR") {
    state = state + 1;
  }
  if (state > 0 && action.type === "DCR") {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  const initialValue = 0;
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <div>
        <h1>Increment number : {state}</h1> <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "INR" });
          }}
        >
          INR
        </button>
        &nbsp; &nbsp;
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "DCR" });
          }}
        >
          DCR
        </button>
      </div>
    </>
  );
};

export default UseReducer;
