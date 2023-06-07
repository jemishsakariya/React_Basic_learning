import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Weatherapi = () => {
  const [val, setVal] = useState({
    country: "",
    city: "",
    temp: "",
    ctime: "",
  });

  useEffect(() => {
    const Weatherapi = async () => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: "53.1,-0.13" },
        headers: {
          "X-RapidAPI-Key":
            "09014c2fc0mshbc7a8ce93c32e29p19c61ejsn375ce2354759",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        // console.log(response.data);

        setVal(() => {
          return {
            country: `${response.data.location.country}`,
            city: `${response.data.location.name}`,
            temp: `${response.data.current.temp_c}`,
            ctime: `${response.data.location.localtime}`,
          };
        });
      } catch (error) {
        console.error(error);
      }
    };

    Weatherapi();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <h1>Weather API</h1>
        <p style={{ textTransform: "capitalize" }}>
          Weather Location is : {val.country}
        </p>
        <p style={{ textTransform: "capitalize" }}>City is : "{val.city}"</p>
        <p style={{ textTransform: "capitalize" }}>
          At current Time {val.ctime}.
        </p>
        <p style={{ textTransform: "capitalize" }}>
          temprature celcius is : {val.temp}.
        </p>
      </div>
    </>
  );
};

export default Weatherapi;
