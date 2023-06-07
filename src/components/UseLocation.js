import React from "react";
import { useLocation } from "react-router-dom";

const UseLocation = () => {
  const location = useLocation();
  //   console.log(location);

  return (
    <>
      <h1>Your path is : {location.pathname}</h1>
      <h1>Your path key is : {location.key}</h1>
    </>
  );
};

export default UseLocation;
