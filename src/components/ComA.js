import React, { useContext } from "react";
import { fname, lname } from "./UseContex";

const ComA = () => {
  const Firstname = useContext(fname);
  const Lastname = useContext(lname);

  return (
    <>
      <h1>
        {Firstname}
        {Lastname}
      </h1>
    </>
  );
};

export default ComA;
