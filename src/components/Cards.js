import React from "react";

const Cards = (props) => {
  return (
    <>
      <div style={{ padding: "30px 0px" }}>
        <div>{props.id}</div>
        <div>{props.title}</div>
        <div>
          <a href={props.clink} rel="noreferrer" target="_blank" >{props.name}</a>
        </div>
      </div>
    </>
  );
};

export default Cards;
