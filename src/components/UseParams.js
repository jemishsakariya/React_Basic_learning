import React from "react";
import { NavLink, Route, Routes, useParams } from "react-router-dom";

const RoutePage = () => {
  const { abc } = useParams();
  return (
    <>
      <h1>This is the Your Path : "{abc}"</h1>
    </>
  );
};

const UseParams = () => {
  return (
    <>
      <h1>Set the path here :</h1>
      <NavLink to={"/useparam/xyz"}>Set path</NavLink>

      {/* parent routes we have to give "/*" trail so the child routes can render and follow the path */}
      {/* in child route we give path after the parent path directly as below so it can follow the path */}
      {/* in this ":abc" is an parameter */}

      <Routes>
        <Route path="/:abc" Component={() => <RoutePage />} />
      </Routes>
    </>
  );
};

export default UseParams;
