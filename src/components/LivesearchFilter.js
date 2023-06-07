import React from "react";
import "../Home.css";
import { useState } from "react";

const Sresult = ({ val }) => {
  const Image = `https://source.unsplash.com/500x500/?${val}`;

  return (
    <>
      <img src={Image} alt="Search not found" />
    </>
  );
};

const LivesearchFilter = () => {
  const [img, setImg] = useState("");

  const InputEvent = (e) => {
    setImg(e.target.value);
  };

  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
            top: "1rem",
          }}
        >
          <input
            type="text"
            className="inp"
            placeholder="Search Anything"
            value={img}
            onChange={InputEvent}
          />
          <br />
          {img === "" ? null : <Sresult val={img} />}
        </div>
      </div>
    </>
  );
};

export default LivesearchFilter;
