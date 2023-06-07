import React, { createContext } from "react";
import ComA from "./ComA";

const fname = createContext();
const lname = createContext();

const UseContex = () => {
  return (
    <>
      <fname.Provider value={"jemish "}>
        <lname.Provider value={"sakariya"}>
          <ComA />
        </lname.Provider>
      </fname.Provider>
    </>
  );
};

export default UseContex;
export { fname, lname };
