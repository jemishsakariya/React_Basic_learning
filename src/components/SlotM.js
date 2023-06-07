import React from "react";

const Match = ({ x, y, z }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#A0D8B3",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1.2rem",
        }}
      >
        <h1>
          {x} {y} {z}
        </h1>
        <h2>The slots are matching</h2>
      </div>
    </>
  );
};

const NotMatch = ({ x, y, z }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#FF597B",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1.2rem",
        }}
      >
        <h1>
          {x} {y} {z}
        </h1>
        <h2>The slots are Not matching</h2>
      </div>
    </>
  );
};

const SlotMachine = (props) => {
  let { x, y, z } = props;

  return x === y && y === z ? (
    <Match x={x} y={y} z={z} />
  ) : (
    <NotMatch x={x} y={y} z={z} />
  );
};

const SlotM = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F0EEED",
            textTransform: "uppercase",
          }}
        >
          <h1 style={{ padding: "1rem" }}>
            🎰Welcome to <span>slot machine game</span>🎰
          </h1>
        </div>

        <div
          style={{
            height: "15rem",
            width: "100%",
          }}
        >
          <SlotMachine x="😂" y="😂" z="😂" />
          <SlotMachine x="😂" y="😂" z="🤣" />
          <SlotMachine x="😂" y="😂" z="😂" />
        </div>
      </div>
    </>
  );
};

export default SlotM;
