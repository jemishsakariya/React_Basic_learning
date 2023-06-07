import React, { useState } from "react";

const FormOnChange = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const onChangeEvent = (e) => {
    const { name, value } = e.target;

    setFullName((preValue) => {
      /* in below first we have of "spread value" that stores the all preValue and then use "[name]": value in name 
      is in arrayForm */
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  return (
    <>
      <form>
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
          <h1 style={{ maxWidth: "55rem" }}>
            Hello, {fullName.fname} {fullName.lname}
          </h1>
          <br />
          <input
            className="inp"
            type="text"
            placeholder="Enter your First Name"
            name={"fname"}
            value={fullName.fname}
            onChange={onChangeEvent}
          />
          <br />
          <input
            className="inp"
            type="text"
            placeholder="Enter your Last Name"
            name={"lname"}
            value={fullName.lname}
            onChange={onChangeEvent}
          />
          <br />
          <button className="btn" type="submit">
            Click Me
          </button>
        </div>
      </form>
    </>
  );
};

export default FormOnChange;
