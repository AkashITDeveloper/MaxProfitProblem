import React from "react";
import DisplayResult from "./DisplayResult";

const Form = () => {
  const [unitTime, setUnitTime] = React.useState("");

  return (
    <>
      <div className="container">
        <input
          type="number"
          onChange={(e) => setUnitTime(e.target.value)}
          placeholder="Enter Time of Unit"
          value={unitTime}
        />
      </div>
      <DisplayResult unit={unitTime === "" ? "" : unitTime} />
    </>
  );
};

export default Form;
