import React, { useState } from "react";
import "../Home.css";

const InputOnChange = () => {
  const [name, setName] = useState("");

  const inputEvent = (e) => {
    setName(e.target.value);
  };

  const setDefaultName = (e) => {
    e.preventDefault(); // This will stop page to reload
    setName("Jemish Sakariya");
  };
  return (
    // in form when it triggers then it reload the page
    <form onSubmit={setDefaultName}>
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
        <h1 style={{ maxWidth: "55rem" }}>Hello, {name}</h1>
        <br />
        <input
          className="inp"
          type="text"
          placeholder="Enter your Name"
          onChange={inputEvent}
        />
        <br />
        {/* In This button {type} is given as submit so when form of submit then onSubmit method will trigger so,There 
        is no need to write a "onClick" method */}
        <button className="btn" type="submit">
          Click Me
        </button>
      </div>
    </form>
  );
};

export default InputOnChange;
