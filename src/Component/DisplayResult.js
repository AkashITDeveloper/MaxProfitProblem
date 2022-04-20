import React, { useState } from "react";

const DisplayResult = ({ unit }) => {
  const marsLand = ["Theatre", "Pub", "CommercialPark"];
  const userUnit = [unit];
  const earning = [1500, 1000, 3000];
  const preUnit = [5, 4, 10];
  const tableData = [0];
  let TheatreEarning = unit - preUnit[0];
  let PubEarning = unit - preUnit[1];
  let CommercialParkEarning = unit - preUnit[2];
  var lastT = TheatreEarning - preUnit[0];
  var lastP = PubEarning - preUnit[1];
  var lastC = CommercialParkEarning - preUnit[2];

  function resultTData() {
    for (let i = 0; i < userUnit.length; i++) {
      if (userUnit.length > 0) {
        const newValue = earning[0] * TheatreEarning;
        if (lastT > 0) {
          TheatreEarning = lastT;
          return newValue + TheatreEarning * earning[0];
        }
        if (unit === "") {
          return 0;
        }
        if (newValue < -1) {
          return 0;
        }
        return newValue;
      }
    }
  }
  function resultPData() {
    for (let i = 0; i < userUnit.length; i++) {
      if (userUnit.length > 0) {
        const newValue = earning[1] * PubEarning;
        if (lastP > 0) {
          PubEarning = lastP;
          return newValue + PubEarning * earning[1];
        }
        if (unit === "") {
          return 0;
        }
        if (newValue < -1) {
          return 0;
        }
        return newValue;
      }
    }
  }
  function resultCData() {
    for (let i = 0; i < userUnit.length; i++) {
      if (userUnit.length > 0) {
        const newValue = earning[2] * CommercialParkEarning;
        if (lastC > 0) {
          CommercialParkEarning = lastC;
          return newValue + CommercialParkEarning * earning[2];
        }
        if (unit === "") {
          return 0;
        }
        if (newValue < -1) {
          return 0;
        }
        return newValue;
      }
    }
  }

  return (
    <h1>
      <table style={{ margin: "2rem" }}>
        <tbody>
          <tr style={{ padding: "2rem" }}>
            <th>T</th>
            <th>P</th>
            <th>C</th>
          </tr>
          {tableData.map((land, index) => {
            return (
              <tr key={index}>
                <td>{`$ ${resultTData()}`}</td>
                <td>{`$ ${resultPData()}`}</td>
                <td>{`$ ${resultCData()}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </h1>
  );
};

export default DisplayResult;
