import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main_div">
        <div className="title-home">
          <h1>This is My Code Home Page</h1>
        </div>
        <div className="mobile_res">
          <div className="arrange">
            <button className="btn" onClick={() => navigate("/arraymap")}>
              ArrayMaps
            </button>
            <button className="btn" onClick={() => navigate("/slotm")}>
              SlotMachine
            </button>
            <button className="btn" onClick={() => navigate("/usestate")}>
              useState
            </button>
            <button className="btn" onClick={() => navigate("/inputonchange")}>
              InputOnChange
            </button>
            <button className="btn" onClick={() => navigate("/formonchange")}>
              FormOnChange
            </button>
            <button className="btn" onClick={() => navigate("/todolist")}>
              TodoList
            </button>
            <button className="btn" onClick={() => navigate("/qnalist")}>
              QnaList
            </button>
            <button
              className="btn"
              onClick={() => navigate("/googlekeepnotes")}
            >
              GoogleKeepNotes
            </button>
            <button className="btn" onClick={() => navigate("/usecontex")}>
              UseContex
            </button>
          </div>

          <div className="arrange">
            <button className="btn" onClick={() => navigate("/useeffect")}>
              UseEffect
            </button>
            <button className="btn" onClick={() => navigate("/apicallcovid")}>
              Apicallcovid
            </button>
            <button className="btn" onClick={() => navigate("/pokemonapi")}>
              PokemonApi
            </button>
            <button className="btn" onClick={() => navigate("/weatherapi")}>
              Weatherapi
            </button>
            <button className="btn" onClick={() => navigate("/useparam")}>
              UseParams
            </button>
            <button className="btn" onClick={() => navigate("/uselocation")}>
              UseLocation
            </button>
            <button
              className="btn"
              onClick={() => navigate("/livesearchfilter")}
            >
              LivesearchFilter
            </button>
            <button className="btn" onClick={() => navigate("/usereducer")}>
              UseReducer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
