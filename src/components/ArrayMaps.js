import React from "react";
import sData from "../data/fack_cards";
import Cards from "./Cards";

let inp = "yes";

const ArrayMaps = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10rem",
          flexWrap: "wrap",
        }}
      >
        {inp === "yes" ? (
          sData.map((ele, index) => {
            return (
              <>
                <Cards
                  key={index}
                  id={ele.id}
                  title={ele.title}
                  clink={ele.clink}
                  name={ele.name}
                />
              </>
            );
          })
        ) : (
          <h1>There is no Data Found</h1>
        )}
      </div>
    </>
  );
};

export default ArrayMaps;
