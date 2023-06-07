import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Pokemonapi = () => {
  const [num, setNum] = useState("N/A");

  const [name, setName] = useState("N/A");

  const [moves, setMoves] = useState("N/A");

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
    //   console.log(res);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });

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
        <h1>
          You Choose <span style={{ color: "red" }}>{num} </span>value
        </h1>
        <h1>
          My Name is <span style={{ color: "red" }}>{name}</span>
        </h1>
        <h1>
          I have <span style={{ color: "red" }}>{moves}</span> moves
        </h1>

        <br />

        <select
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="25">25</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="10">10</option>
        </select>
      </div>
    </>
  );
};

export default Pokemonapi;
