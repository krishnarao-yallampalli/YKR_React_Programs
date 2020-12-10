import React from "react";
import ReactDOM from "react-dom";

const name = "Krishna Rao";

const myElement = (
  <div>
    <h1>Hello {name}!</h1>
    <p>Created by {name}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>
);

ReactDOM.render(myElement, document.getElementById("root"));
