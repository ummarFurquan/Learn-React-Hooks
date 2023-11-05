import React, { useState } from "react";

function StateHook() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("Blue"); /* This remains constant but the state of the Count Changes,
                                                This is very beneficial when you want to update the state of one particular thing and not the other!*/
  const IncrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const DecrementCount = () => {
    setCount(
      (prevCount) => prevCount - 1
    ); /* Here the state of the theme only changes from BLUE to RED,
                                                  only when we click on the Decrement Count button and not on the increment Count Button */
  };
  return (
    <>
      <div
        className="container my-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>INCREMENT AND DECREMENT COUNTER</h3>
      </div>
      <div className="container">
        <button
          onClick={IncrementCount}
          className="btn btn-outline-danger mx-5"
        >
          +
        </button>
        <span style={{ fontSize: "25px" }}>{count} </span>
        <span style={{ fontSize: "25px" }}>{theme}</span>
        <button
          onClick={DecrementCount}
          className="btn btn-outline-danger mx-5"
        >
          -
        </button>
      </div>
    </>
  );
}

export default StateHook;
