import React from "react";
import ReactDOM from "react-dom";

const name = "Krishna Rao";
const luckyNo = 7;

const myElement = (
  <div>
    <h1>Hello {name}!</h1>
    <p>My Lucky number is {luckyNo}</p>
  </div>
);

ReactDOM.render(myElement, document.getElementById("root"));
