import React, { useEffect, useState } from "react";
import "./Apicallcovid.css";

const Apicallcovid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>COVID-19 Dashboard</h1>
        </div>

        <div className="table-responsive">
          <table className="table">
            <thead className="thead-dark">
              <tr className="tr tr-table">
                <th className="th">State</th>
                <th className="th">Confirmed</th>
                <th className="th">recovered</th>
                <th className="th">deaths</th>
                <th className="th">active</th>
                <th className="th">updated</th>
              </tr>
            </thead>

            <tbody>
              {data.map((cuuValue, index) => {
                return (
                  <>
                    <tr className="td td-table" key={index}>
                      <td className="td">{cuuValue.state}</td>
                      <td className="td">{cuuValue.confirmed}</td>
                      <td className="td">{cuuValue.recovered}</td>
                      <td className="td">{cuuValue.deaths}</td>
                      <td className="td">{cuuValue.active}</td>
                      <td className="td">{cuuValue.lastupdatedtime}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Apicallcovid;
